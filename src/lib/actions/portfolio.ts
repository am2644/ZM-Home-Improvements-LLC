"use server";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { PORTFOLIO_CATEGORY_LABELS } from "@/lib/site";

export type PortfolioState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const MAX_FILE_BYTES = 8 * 1024 * 1024;

const MIME_EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

export async function createPortfolioItem(
  _previousState: PortfolioState,
  formData: FormData,
): Promise<PortfolioState> {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const image = formData.get("image");

  if (title.length < 2) {
    return { status: "error", message: "Please enter a project title." };
  }
  if (!PORTFOLIO_CATEGORY_LABELS[category]) {
    return { status: "error", message: "Please choose a category." };
  }
  if (!(image instanceof File) || image.size === 0) {
    return { status: "error", message: "Please choose an image to upload." };
  }
  if (image.size > MAX_FILE_BYTES) {
    return { status: "error", message: "Image must be 8 MB or smaller." };
  }

  const extension = MIME_EXTENSIONS[image.type];
  if (!extension) {
    return { status: "error", message: "Use a JPG, PNG, WebP, or AVIF image." };
  }

  const filename = `${randomUUID()}.${extension}`;
  const uploadsDirectory = path.join(process.cwd(), "public", "uploads");

  try {
    await mkdir(uploadsDirectory, { recursive: true });
    await writeFile(
      path.join(uploadsDirectory, filename),
      Buffer.from(await image.arrayBuffer()),
    );

    await prisma.portfolioItem.create({
      data: {
        title,
        category,
        imageUrl: `/uploads/${filename}`,
      },
    });

    revalidatePath("/portfolio");
    revalidatePath("/admin");
    revalidatePath("/admin/portfolio");

    return { status: "success", message: "Portfolio item added." };
  } catch (error) {
    console.error("Failed to create portfolio item", error);
    return { status: "error", message: "Could not save the project. Please try again." };
  }
}

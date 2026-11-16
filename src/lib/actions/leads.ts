"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { SERVICE_OPTIONS } from "@/lib/site";

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const VALID_SERVICES = new Set(SERVICE_OPTIONS.map((option) => option.value));

export async function addLead(_previousState: LeadState, formData: FormData): Promise<LeadState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();

  if (name.length < 2) {
    return { status: "error", message: "Please enter your name." };
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return { status: "error", message: "Please enter a valid phone number." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!VALID_SERVICES.has(service as (typeof SERVICE_OPTIONS)[number]["value"])) {
    return { status: "error", message: "Please choose a service." };
  }

  try {
    await prisma.lead.create({
      data: { name, phone, email, service },
    });
    revalidatePath("/admin");
    revalidatePath("/admin/leads");
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong while sending your request. Please try again.",
    };
  }
}

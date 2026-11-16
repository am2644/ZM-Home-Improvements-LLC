import "dotenv/config";
import { prisma } from "../src/lib/db";

const projects = [
  {
    id: 1,
    title: "Crestview Kitchen Refresh",
    category: "kitchens",
    imageUrl: "/assets/port-1.jpg",
  },
  {
    id: 2,
    title: "Spa Bath & Walk-In Shower",
    category: "bathrooms",
    imageUrl: "/assets/port-2.jpg",
  },
  {
    id: 3,
    title: "16 × 20 Studio & Music Space",
    category: "additions",
    imageUrl: "/assets/port-3.jpg",
  },
  {
    id: 4,
    title: "Quartz Island Kitchen",
    category: "kitchens",
    imageUrl: "/assets/port-4.jpg",
  },
  {
    id: 5,
    title: "Freestanding Tub Retreat",
    category: "bathrooms",
    imageUrl: "/assets/port-5.jpg",
  },
  {
    id: 6,
    title: "Open-Concept Living Addition",
    category: "additions",
    imageUrl: "/assets/port-6.jpg",
  },
  {
    id: 7,
    title: "Rental Kitchen Remodel",
    category: "kitchens",
    imageUrl: "/assets/port-7.jpg",
  },
  {
    id: 8,
    title: "Double Vanity Renovation",
    category: "bathrooms",
    imageUrl: "/assets/port-8.jpg",
  },
  {
    id: 9,
    title: "Carport & Covered Patio",
    category: "additions",
    imageUrl: "/assets/port-9.jpg",
  },
];

async function main() {
  const base = new Date("2026-11-01T12:00:00Z").getTime();

  for (const [index, project] of projects.entries()) {
    const createdAt = new Date(base - index * 60_000);

    await prisma.portfolioItem.upsert({
      where: { id: project.id },
      update: {
        title: project.title,
        category: project.category,
        imageUrl: project.imageUrl,
        createdAt,
      },
      create: {
        ...project,
        createdAt,
      },
    });
  }

  console.log(`Seeded ${projects.length} portfolio items.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

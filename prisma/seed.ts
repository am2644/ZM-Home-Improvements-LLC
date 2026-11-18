import "dotenv/config";
import { prisma } from "../src/lib/db";

const projects = [
  {
    id: 1,
    title: "Crestview Kitchen Refresh",
    category: "kitchens",
    imageUrl: "/assets/work/crestview-kitchen.jpg",
  },
  {
    id: 2,
    title: "Spa Bath & Walk-In Shower",
    category: "bathrooms",
    imageUrl: "/assets/work/spa-bath.jpg",
  },
  {
    id: 3,
    title: "Carport & Covered Patio",
    category: "additions",
    imageUrl: "/assets/work/carport-patio.jpg",
  },
  {
    id: 4,
    title: "Statement Blue Kitchen",
    category: "kitchens",
    imageUrl: "/assets/work/blue-kitchen.jpg",
  },
  {
    id: 5,
    title: "Freestanding Tub Retreat",
    category: "bathrooms",
    imageUrl: "/assets/work/freestanding-tub.jpg",
  },
  {
    id: 6,
    title: "Custom Closet Build-Out",
    category: "additions",
    imageUrl: "/assets/work/closet-buildout.jpg",
  },
  {
    id: 7,
    title: "Rental Kitchen Remodel",
    category: "kitchens",
    imageUrl: "/assets/work/rental-kitchen.jpg",
  },
  {
    id: 8,
    title: "Double Vanity Renovation",
    category: "bathrooms",
    imageUrl: "/assets/work/double-vanity.jpg",
  },
  {
    id: 9,
    title: "Powder Bath Refresh",
    category: "bathrooms",
    imageUrl: "/assets/work/powder-bath.jpg",
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

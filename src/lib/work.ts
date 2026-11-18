import { PORTFOLIO_CATEGORY_LABELS } from "@/lib/site";

export type WorkProjectContent = {
  summary: string;
  overview: [string, string];
  highlights: string[];
  quote: { text: string; author: string; source: string };
  projectType: string;
};

export const WORK_PROJECT_CONTENT: Record<number, WorkProjectContent> = {
  1: {
    summary:
      "A bright kitchen refresh with white cabinetry, stone countertops, a tiled backsplash, and updated stainless appliances.",
    overview: [
      "The kitchen keeps its familiar layout while the finishes do the heavy lifting. White cabinetry lightens the room, and a textured backsplash adds depth without making the space busy.",
      "New countertops and appliances bring the work areas up to date, with the sink, range, and storage kept within easy reach.",
    ],
    highlights: [
      "White cabinetry with updated hardware",
      "Stone countertops and tiled backsplash",
      "Updated stainless appliances",
      "Brighter, more functional work areas",
    ],
    quote: {
      text: "Zeev and his team were punctual and transparent throughout the entire process. They were meticulous and clearly take pride in the work they do.",
      author: "Brett Stoltenberg",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
  2: {
    summary:
      "A bathroom renovation centered on a walk-in shower with a black grid enclosure, large-format white tile, and a patterned tile floor.",
    overview: [
      "The shower becomes the focal point: a black-framed glass enclosure, full-height white tile, and a built-in niche keep the space open and easy to maintain.",
      "A patterned floor tile adds visual interest underfoot, while the surrounding fixtures and lighting were updated to complete the room.",
    ],
    highlights: [
      "Walk-in shower with glass enclosure",
      "Large-format wall tile and built-in niche",
      "Patterned floor tile",
      "Updated bathroom fixtures",
    ],
    quote: {
      text: "He is extremely conscientious and attentive to details. He hires skilled subcontractors and keeps on them to make sure they do a good job.",
      author: "Elizabeth Mueller",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
  3: {
    summary:
      "A heavy-timber carport and covered patio that adds shaded parking and a more usable outdoor area.",
    overview: [
      "The structure uses exposed posts and beams for a straightforward, durable look that works with the property.",
      "The covered footprint protects vehicles from the sun and creates a shaded area that can be used for more than parking.",
    ],
    highlights: [
      "Heavy timber posts and beams",
      "Covered parking area",
      "Shaded outdoor space",
      "Simple, durable construction",
    ],
    quote: {
      text: "They were all very polite and professional and left the property clean!",
      author: "Rita S",
      source: "Google review",
    },
    projectType: "Custom addition",
  },
  4: {
    summary:
      "A kitchen update built around bold blue cabinetry, tiled countertops, and stainless appliances.",
    overview: [
      "Blue cabinetry gives this kitchen a distinct personality while keeping the layout familiar and functional.",
      "Tiled countertops and a matching backsplash tie the room together, with stainless appliances providing contrast.",
    ],
    highlights: [
      "Bold blue cabinetry",
      "Tiled countertops and backsplash",
      "Stainless steel appliances",
      "Updated counter and backsplash surfaces",
    ],
    quote: {
      text: "He’s very communicative and everything was done at a fair price. He and his crew go the extra mile!",
      author: "Raine Maggio",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
  5: {
    summary:
      "A bathroom with a freestanding tub, double vanity, and a brighter, more open feel.",
    overview: [
      "The freestanding tub is positioned by the window, with a tiled surround and open floor space around it.",
      "A double vanity anchors the opposite wall, and updated flooring and fixtures complete the room.",
    ],
    highlights: [
      "Freestanding soaking tub",
      "Tiled tub surround",
      "Double vanity",
      "Updated flooring and fixtures",
    ],
    quote: {
      text: "Our bathroom turned out absolutely beautiful and feels like a true work of art.",
      author: "Madison Brundick",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
  6: {
    summary:
      "A built-in closet system with white shelving and hanging space to make better use of the room.",
    overview: [
      "The build-out turns an underused area into organized storage, with shelves and hanging sections sized for everyday use.",
      "White millwork keeps the space bright and blends with the surrounding trim.",
    ],
    highlights: [
      "Built-in shelving",
      "Dedicated hanging space",
      "White millwork",
      "Better everyday organization",
    ],
    quote: {
      text: "Zeev and his team were great and professional. Was very communicative in person and over the phone, and even finished the job earlier than expected.",
      author: "Evan Williams",
      source: "Google review",
    },
    projectType: "Custom addition",
  },
  7: {
    summary:
      "A durable, neutral kitchen update for a rental property, with white cabinetry and updated counters.",
    overview: [
      "For a rental, the priority is a clean, durable finish that will hold up to turnover and daily use.",
      "White cabinetry and neutral surfaces keep the kitchen bright and broadly appealing, with updated counters and appliances.",
    ],
    highlights: [
      "White cabinetry",
      "Updated countertops",
      "Neutral, renter-friendly finishes",
      "Durable, low-maintenance surfaces",
    ],
    quote: {
      text: "He listened to our ideas, understood our objectives, had great instincts, and made practical (not costly) suggestions to improve the project.",
      author: "Cheryl Bradford",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
  8: {
    summary:
      "A bathroom update featuring a double wood vanity, large mirror, and refreshed tub area.",
    overview: [
      "The double vanity adds counter space and storage for two, with wood cabinetry that brings warmth to the room.",
      "A large mirror and updated fixtures complete the vanity wall, while the tub area and flooring were refreshed alongside it.",
    ],
    highlights: [
      "Double vanity with wood cabinetry",
      "Large vanity mirror",
      "Updated tub area",
      "Refreshed flooring and fixtures",
    ],
    quote: {
      text: "Our old master tub/shower was transformed to a sauna-like walk-in shower and is easily the best piece in the house!",
      author: "Christian Poblete",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
  9: {
    summary:
      "A small powder bath refreshed with a floating wood vanity, round backlit mirror, and modern fixtures.",
    overview: [
      "The floating vanity keeps the floor visible, which makes a small room feel more open.",
      "A round backlit mirror and clean white countertop give the space a modern focal point without adding clutter.",
    ],
    highlights: [
      "Floating wood vanity",
      "Round backlit mirror",
      "White countertop",
      "Brighter, more open small bath",
    ],
    quote: {
      text: "Zeev had great communication and I was always up to date on what was happening with my bathroom remodel and exterior house painting.",
      author: "Jennifer Harris",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
};

export function getWorkProject(item: {
  id: number;
  title: string;
  category: string;
}): WorkProjectContent {
  const content = WORK_PROJECT_CONTENT[item.id];
  if (content) return content;

  const categoryLabel = PORTFOLIO_CATEGORY_LABELS[item.category] ?? "Home improvement";

  return {
    summary: `${item.title} is a recent ${categoryLabel.toLowerCase()} project completed by ZM Home Improvements in Austin, TX.`,
    overview: [
      "Every project starts with a walkthrough, a clear scope, and a plan for the selections that will shape the finished space.",
      "Zeev stays involved from the first estimate through the final punch list, keeping communication direct and the work moving.",
    ],
    highlights: [
      "Owner-led planning and communication",
      "Careful protection and cleanup",
      "A final walkthrough before completion",
    ],
    quote: {
      text: "Zeev always arrived with a smile and a positive out look. He’s very communicative and everything was done at a fair price.",
      author: "Raine Maggio",
      source: "Google review",
    },
    projectType: categoryLabel,
  };
}

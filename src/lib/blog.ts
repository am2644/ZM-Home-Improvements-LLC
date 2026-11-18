export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author: string; source: string }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  author: string;
  heroImage: string;
  heroAlt: string;
  blocks: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-austin-homeowners-say-about-remodeling",
    title: "What Austin Homeowners Say About Remodeling With ZM Home Improvements",
    description:
      "Clear communication, careful finishes, and problem-solving: what more than 40 five-star Google reviews reveal about remodeling with ZM Home Improvements in Austin, TX.",
    excerpt:
      "More than 40 five-star Google reviews point to the same strengths: clear communication, careful finishes, and a crew that treats your home with respect.",
    date: "2026-11-18",
    dateLabel: "November 18, 2026",
    readTime: "5 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/work/crestview-kitchen.jpg",
    heroAlt:
      "White kitchen with quartz countertops, tile backsplash, and stainless steel appliances in an Austin home",
    blocks: [
      {
        type: "paragraph",
        text: "A remodel is a long stretch of decisions, schedules, and people moving through your home. Homeowners rarely judge the experience by the tile alone. They remember whether the contractor answered the phone, protected the floors, and followed through on the small things. We went back through more than 40 five-star Google reviews for ZM Home Improvements, and the same themes appeared again and again.",
      },
      { type: "heading", text: "Communication comes first" },
      {
        type: "paragraph",
        text: "Zeev Machluf leads every project from the first walkthrough to the final punch list. That direct line matters when finish selections, inspection windows, and delivery dates start to overlap. Homeowners consistently mention the same thing: they knew where the project stood.",
      },
      {
        type: "quote",
        text: "Zeev always arrived with a smile and a positive out look. He’s very communicative and everything was done at a fair price. He and his crew go the extra mile!",
        author: "Raine Maggio",
        source: "Google review",
      },
      {
        type: "paragraph",
        text: "The process is built around that clarity. A walkthrough produces a practical scope and a free estimate. Samples and design selections happen before demolition, not in the middle of it. Updates keep the plan visible while the work is underway.",
      },
      {
        type: "image",
        src: "/assets/work/spa-bath.jpg",
        alt: "Walk-in shower with black-framed glass, white tile, and a patterned floor in an Austin bathroom",
        caption: "A walk-in shower and patterned tile floor in an Austin bathroom remodel.",
      },
      { type: "heading", text: "A finish that holds up close" },
      {
        type: "paragraph",
        text: "Most of the work is decided in the details — the shower niche, the line where tile meets drywall, the reveal on a cabinet door, the way a countertop edge meets a sink. The best compliments come after a homeowner has lived with the space for a while.",
      },
      {
        type: "quote",
        text: "Zeev and his team were punctual and transparent throughout the entire process. They were meticulous and clearly take pride in the work they do.",
        author: "Brett Stoltenberg",
        source: "Google review",
      },
      {
        type: "quote",
        text: "He is extremely conscientious and attentive to details. He hires skilled subcontractors and keeps on them to make sure they do a good job.",
        author: "Elizabeth Mueller",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/double-vanity.jpg",
        alt: "Bathroom with a double wood vanity, large mirror, and tub in an Austin renovation",
        caption: "A double vanity and fresh finishes in a full bathroom renovation.",
      },
      { type: "heading", text: "When a remodel throws a curveball" },
      {
        type: "paragraph",
        text: "Older Austin homes have a way of keeping secrets. Opening a wall can reveal outdated plumbing, old wiring, or framing that was never meant for a modern layout. The important part is what happens next.",
      },
      {
        type: "quote",
        text: "When challenges came up (especially with our older plumbing and subcontractor scheduling) he stepped in himself to keep things moving, which really set him apart from other contractors we’ve worked with.",
        author: "Madison Brundick",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/blue-kitchen.jpg",
        alt: "Kitchen with bold blue cabinets, tile counters, and stainless steel appliances",
        caption: "A bold blue kitchen with new cabinetry and tile counters.",
      },
      { type: "heading", text: "Respect for the home — and the people in it" },
      {
        type: "paragraph",
        text: "A remodel means having a crew in your home for weeks at a time. Punctuality, politeness, and a clean job site are not extras — they are part of the job.",
      },
      {
        type: "quote",
        text: "They were all very polite and professional and left the property clean!",
        author: "Rita S",
        source: "Google review",
      },
      {
        type: "quote",
        text: "Zeev had great communication and I was always up to date on what was happening with my bathroom remodel and exterior house painting.",
        author: "Jennifer Harris",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/carport-patio.jpg",
        alt: "New carport and covered patio structure with wood framing in Austin",
        caption: "A new carport and covered patio structure built for an Austin property.",
      },
      { type: "heading", text: "What this means for your project" },
      {
        type: "paragraph",
        text: "If you are planning a kitchen, bathroom, addition, or whole-home improvement in Austin, the fundamentals stay the same:",
      },
      {
        type: "list",
        items: [
          "A walkthrough with a clear, itemized estimate",
          "Design selections and samples before construction",
          "One point of contact and regular updates during the build",
          "A final walkthrough and punch list before we call it finished",
        ],
      },
      {
        type: "paragraph",
        text: "We work across Austin and the surrounding communities. If you would like to walk through your project, call or text (512) 560-1400, or request a free estimate online.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

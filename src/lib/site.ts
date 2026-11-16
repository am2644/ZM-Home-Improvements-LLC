export const PHONE_DISPLAY = "(512) 560-1400";
export const PHONE_HREF = "tel:+15125601400";
export const EMAIL_DISPLAY = "info@zmhomeimprovements.com";
export const EMAIL_MAILTO = "mailto:zmsocialmediamarketing26@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/zm.clientshowcase/";
export const INSTAGRAM_HANDLE = "@zm.clientshowcase";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=ZM+Home+Improvements+Austin+TX";
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=30.3347544,-97.720744&z=12&hl=en&output=embed";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "kitchen", label: "Kitchen remodeling" },
  { value: "bathroom", label: "Bathroom renovation" },
  { value: "addition", label: "Custom addition" },
  { value: "whole-home", label: "Whole-home remodel" },
  { value: "other", label: "Multiple projects / not sure" },
] as const;

export const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  SERVICE_OPTIONS.map((option) => [option.value, option.label]),
);

export const PORTFOLIO_CATEGORIES = ["kitchens", "bathrooms", "additions"] as const;

export const PORTFOLIO_CATEGORY_LABELS: Record<string, string> = {
  kitchens: "Kitchens",
  bathrooms: "Bathrooms",
  additions: "Additions",
};

export const PROJECT_ASPECTS: Record<string, string> = {
  "/assets/port-1.jpg": "aspect-[4/3]",
  "/assets/port-2.jpg": "aspect-[4/5]",
  "/assets/port-3.jpg": "aspect-[4/3]",
  "/assets/port-4.jpg": "aspect-square",
  "/assets/port-5.jpg": "aspect-[4/3]",
  "/assets/port-6.jpg": "aspect-[4/5]",
  "/assets/port-7.jpg": "aspect-[4/3]",
  "/assets/port-8.jpg": "aspect-square",
  "/assets/port-9.jpg": "aspect-[4/3]",
};

export type InstagramPost = {
  id: string;
  href: string;
  image: string;
  alt: string;
  caption: string;
  type: "Post" | "Reel";
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "Dfx0w7JnJQ5",
    href: "https://www.instagram.com/zm.clientshowcase/reel/Dfx0w7JnJQ5/",
    image: "/assets/instagram/post-outdoor.jpg",
    alt: "New wrap-around outdoor deck with white railings, seating, and planters",
    caption:
      "From 'we never go out there' to the best seat in the house. Turning unused space into a full wrap-around dream.",
    type: "Reel",
  },
  {
    id: "DfoZERMjXby",
    href: "https://www.instagram.com/zm.clientshowcase/reel/DfoZERMjXby/",
    image: "/assets/instagram/post-restoration.jpg",
    alt: "Restored interior room with new flooring and fresh paint after water damage",
    caption: "When nature unleashes its fury, we're ready to bring serenity back.",
    type: "Reel",
  },
  {
    id: "Dei1KtYlX4X",
    href: "https://www.instagram.com/zm.clientshowcase/p/Dei1KtYlX4X/",
    image: "/assets/instagram/post-porch.jpg",
    alt: "Before-and-after collage of new siding, porches, and an outdoor seating area",
    caption:
      "A little home glow-up just in time for the cooler weather! Fresh siding, new front and back porches, and a cozy outdoor fire spot.",
    type: "Post",
  },
  {
    id: "DebAuBpldwe",
    href: "https://www.instagram.com/zm.clientshowcase/p/DebAuBpldwe/",
    image: "/assets/instagram/post-gym.jpg",
    alt: "New gym wall mirror installed beside treadmills overlooking downtown Austin",
    caption:
      "True strength deserves a flawless reflection. We seamlessly replaced this gym wall mirror right by the treadmills.",
    type: "Post",
  },
  {
    id: "DeV7fyKl0NP",
    href: "https://www.instagram.com/zm.clientshowcase/reel/DeV7fyKl0NP/",
    image: "/assets/instagram/post-showcase.jpg",
    alt: "ZM Home Improvements contact card over a bright remodeled kitchen",
    caption:
      "Turn your vision into reality with exceptional upgrades. Connect with our skilled professionals today.",
    type: "Reel",
  },
  {
    id: "DeRtEthlWOD",
    href: "https://www.instagram.com/zm.clientshowcase/p/DeRtEthlWOD/",
    image: "/assets/instagram/post-bar.jpg",
    alt: "Built-in home bar with dark cabinetry and a beverage fridge beneath open stairs",
    caption:
      "Crisp air, hot cider, and... home improvements? October is the perfect time to get your home ready for the hosting season.",
    type: "Post",
  },
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  short: string;
  priceCents: number;
  image: string; // single image path
};

export const products: Product[] = [
  {
    id: "drag-4pack",
    slug: "dragging-weights-4-pack",
    name: "Dragging Weights — 4 Pack (4 oz)",
    short: "50/50 lead/slag, long-profile drags.",
    priceCents: 2000,
    image: "/productimages/4packPlaceHolder.jpg",
  },
  {
    id: "rig-2pack",
    slug: "catfish-rigs-2-pack",
    name: "Catfish Rigs — 2 Pack",
    short: "Pre-tied leaders with floats and swivels.",
    priceCents: 1600,
    image: "/productimages/4packPlaceHolder.jpg",
  },
  {
    id: "rig-4plus4",
    slug: "weekend-4-rigs-4-weights",
    name: "Weekend Kit — 4 Rigs + 4 Weights",
    short: "Grab-and-go bundle for a full session.",
    priceCents: 4500,
    image: "/productimages/4packPlaceHolder.jpg",
  },
];

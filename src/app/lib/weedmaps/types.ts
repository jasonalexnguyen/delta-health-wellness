/** Raw menu item shape returned by the Weedmaps discovery API. */
export interface WeedmapsRawMenuItem {
  id: number;
  slug: string;
  name: string;
  body?: string;
  category?: string;
  brand?: {
    id: number;
    name: string;
    slug: string;
  };
  strain?: {
    id: number;
    name: string;
    slug: string;
    genetics?: "sativa" | "indica" | "hybrid";
  };
  genetics?: "sativa" | "indica" | "hybrid";
  license_type?: "recreational" | "medical";
  avatar_image?: {
    small_url?: string;
    original_url?: string;
  };
  prices?: WeedmapsPriceGroup[];
  cannabinoids?: WeedmapsCannabinoid[];
  online_orderable?: boolean;
  is_published?: boolean;
}

export interface WeedmapsPriceGroup {
  label: string;
  price: number;
}

export interface WeedmapsCannabinoid {
  slug: string; // e.g. "thc", "thca", "cbd"
  percent?: { min: number; max: number };
  milligrams?: { min: number; max: number };
}

/** Raw API response wrapper. */
export interface WeedmapsMenuResponse {
  data: {
    menu_items: WeedmapsRawMenuItem[];
  };
  meta?: {
    total_menu_items?: number;
    current_page?: number;
    total_pages?: number;
  };
}

// ---------------------------------------------------------------------------
// Normalized types used by the frontend
// ---------------------------------------------------------------------------

export interface MenuItem {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  strain: string;
  genetics: "sativa" | "indica" | "hybrid" | "n/a";
  imageUrl: string;
  thc: string; // formatted, e.g. "24.5%"
  cbd: string;
  prices: { label: string; price: number }[];
  onlineOrderable: boolean;
}

/** The category buckets we use for filtering. */
export type MenuCategory =
  | "All"
  | "Flower"
  | "Edibles"
  | "Vapes"
  | "Concentrates"
  | "Pre-Rolls"
  | "Drinks"
  | "Wellness"
  | "Gear";

export const CATEGORY_MAP: Record<string, MenuCategory> = {
  flower: "Flower",
  edibles: "Edibles",
  edible: "Edibles",
  gummies: "Edibles",
  chocolates: "Edibles",
  vapes: "Vapes",
  vape: "Vapes",
  cartridges: "Vapes",
  "vape-pens": "Vapes",
  concentrates: "Concentrates",
  concentrate: "Concentrates",
  wax: "Concentrates",
  resin: "Concentrates",
  rosin: "Concentrates",
  "pre-rolls": "Pre-Rolls",
  "pre-roll": "Pre-Rolls",
  preroll: "Pre-Rolls",
  prerolls: "Pre-Rolls",
  drinks: "Drinks",
  beverages: "Drinks",
  topicals: "Wellness",
  tinctures: "Wellness",
  capsules: "Wellness",
  cbd: "Wellness",
  wellness: "Wellness",
  gear: "Gear",
  accessories: "Gear",
};

import {
  CATEGORY_MAP,
  MenuItem,
  MenuCategory,
  WeedmapsRawMenuItem,
} from "./types";

const DISPENSARY_SLUG = "delta-health-and-wellness-2-4";

/**
 * Base URL for the Weedmaps web-consumer API.
 * This is the same endpoint their frontend uses to render menu pages.
 */
const WM_API_BASE = "https://weedmaps.com/api/web/v1";

/**
 * Fetch all menu items from the Weedmaps dispensary listing.
 * Paginates automatically until all items are retrieved.
 */
export async function fetchWeedmapsMenu(): Promise<WeedmapsRawMenuItem[]> {
  const allItems: WeedmapsRawMenuItem[] = [];
  let page = 1;
  const pageSize = 150; // max allowed per page
  let totalPages = 1;

  do {
    const url = `${WM_API_BASE}/listings/dispensaries/${DISPENSARY_SLUG}/menu_items?page_size=${pageSize}&page=${page}`;

    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "DeltaHealthWellness/1.0",
      },
      next: { revalidate: 300 }, // cache for 5 minutes in Next.js
    });

    if (!res.ok) {
      throw new Error(
        `Weedmaps API error: ${res.status} ${res.statusText}`
      );
    }

    const json = await res.json();
    const items: WeedmapsRawMenuItem[] = json?.data?.menu_items ?? [];
    allItems.push(...items);

    totalPages = json?.meta?.total_pages ?? 1;
    page++;
  } while (page <= totalPages);

  return allItems;
}

// ---------------------------------------------------------------------------
// Normalization helpers
// ---------------------------------------------------------------------------

/** Map a raw Weedmaps category string to our frontend categories. */
function normalizeCategory(raw?: string): MenuCategory {
  if (!raw) return "Flower";
  const key = raw.toLowerCase().replace(/\s+/g, "-");
  return CATEGORY_MAP[key] ?? "Flower";
}

/** Format a cannabinoid percent range into a human-readable string. */
function formatPercent(
  cannabinoids: WeedmapsRawMenuItem["cannabinoids"],
  slug: string
): string {
  const entry = cannabinoids?.find(
    (c) => c.slug === slug || c.slug === `${slug}a` // match "thc" or "thca"
  );
  if (!entry?.percent) return "—";
  const { min, max } = entry.percent;
  if (min === max) return `${min}%`;
  return `${min}–${max}%`;
}

/** Transform a raw Weedmaps menu item into our normalized frontend shape. */
export function normalizeMenuItem(raw: WeedmapsRawMenuItem): MenuItem {
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    description: raw.body?.replace(/<[^>]*>/g, "").slice(0, 200) ?? "",
    category: normalizeCategory(raw.category),
    brand: raw.brand?.name ?? "Unknown",
    strain: raw.strain?.name ?? "",
    genetics: raw.genetics ?? raw.strain?.genetics ?? "n/a",
    imageUrl:
      raw.avatar_image?.small_url ??
      raw.avatar_image?.original_url ??
      "",
    thc: formatPercent(raw.cannabinoids, "thc"),
    cbd: formatPercent(raw.cannabinoids, "cbd"),
    prices:
      raw.prices?.map((p) => ({ label: p.label, price: p.price })) ?? [],
    onlineOrderable: raw.online_orderable ?? false,
  };
}

/**
 * Fetch and normalize the entire menu.
 * Returns items grouped by category for easy frontend rendering.
 */
export async function getParsedMenu(): Promise<{
  items: MenuItem[];
  categories: MenuCategory[];
  byCategory: Record<MenuCategory, MenuItem[]>;
}> {
  const rawItems = await fetchWeedmapsMenu();
  const items = rawItems.map(normalizeMenuItem);

  const byCategory: Record<string, MenuItem[]> = {};
  for (const item of items) {
    const cat = item.category;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(item);
  }

  const categories: MenuCategory[] = [
    "All",
    ...Object.keys(byCategory) as MenuCategory[],
  ];

  return {
    items,
    categories,
    byCategory: byCategory as Record<MenuCategory, MenuItem[]>,
  };
}

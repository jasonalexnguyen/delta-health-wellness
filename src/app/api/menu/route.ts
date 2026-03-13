import { NextResponse } from "next/server";
import { getParsedMenu } from "@/app/lib/weedmaps/parser";

export const revalidate = 300; // ISR: revalidate every 5 minutes

export async function GET() {
  try {
    const menu = await getParsedMenu();
    return NextResponse.json(menu);
  } catch (error) {
    console.error("Failed to fetch Weedmaps menu:", error);

    // Return a structured error so the frontend can fall back gracefully
    return NextResponse.json(
      {
        error: "Failed to fetch menu data from Weedmaps",
        items: [],
        categories: ["All"],
        byCategory: {},
      },
      { status: 502 }
    );
  }
}

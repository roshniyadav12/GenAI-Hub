import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { aiOutput } from "@/lib/schema";
import { desc } from "drizzle-orm"; // Import desc for sorting



export async function GET() {
  
  try {
    const data = await db
      .select({
        id: aiOutput.id,
        templateSlug: aiOutput.templateSlug,
        aiResponse: aiOutput.aiResponse,
        createdAt: aiOutput.createdAt,
      })
      .from(aiOutput)
      .orderBy(desc(aiOutput.createdAt)); // Sort by latest first

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}
  

import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await client.create({ _type: "waitlist", ...body });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

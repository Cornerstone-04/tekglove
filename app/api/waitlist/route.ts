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
    const doc = await client.create({
      _type: "waitlist",
      name: body.name,
      email: body.email,
      useCase: body.useCase ?? "",
      submittedAt: body.submittedAt,
    });
    return NextResponse.json({ success: true, id: doc._id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Waitlist API Error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

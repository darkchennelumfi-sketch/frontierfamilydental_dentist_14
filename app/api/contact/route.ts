import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ ok: false, message: "Invalid form data." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}

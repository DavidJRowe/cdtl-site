import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: validate/sanitize input
  // Example: send to console or email provider (Resend/Nodemailer)
  console.log("Contact form submission:", data);
  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "support@cadi67.com";
// Must be on a domain verified in Resend (see RESEND_FROM_EMAIL env var).
const DEFAULT_FROM = "CADI67 Website <noreply@cadi67.com>";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "Name, email, service, and project details are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const textBody = [
    `New estimate request from cadi67.com`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${service}`,
    ``,
    `Project Details:`,
    message,
  ].join("\n");

  const htmlBody = `
    <h2>New estimate request from cadi67.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Project Details:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL || DEFAULT_FROM,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New Estimate Request from ${name}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again later." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Failed to send contact form email:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

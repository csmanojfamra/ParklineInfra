import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, service, message } = body;

    // Basic server-side validation
    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In production, send email via SMTP/SendGrid/Resend/etc.
    // For now, log the enquiry and return success
    // To wire a real email: set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS env vars
    // and use nodemailer or a transactional email service

    console.log("New enquiry received:", {
      name,
      company,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Optional: forward to email if env vars are set
    const emailEndpoint = process.env.EMAIL_ENDPOINT;
    if (emailEndpoint) {
      await fetch(emailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.EMAIL_API_KEY || ""}` },
        body: JSON.stringify({
          to: "info@parklineinfra.com",
          subject: `New Enquiry from ${name} — Parkline Infra Website`,
          text: `Name: ${name}\nCompany: ${company || "Not provided"}\nPhone: ${phone}\nEmail: ${email}\nService: ${service || "General"}\n\nMessage:\n${message}`,
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

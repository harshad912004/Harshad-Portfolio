import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with the environment variable API key
// Secrets are kept safe on the server and never exposed to the client
const resend = new Resend(process.env.RESEND_API_KEY || "dummy-key");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required. Please fill out the form completely." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format. Please check your email address." },
        { status: 400 }
      );
    }

    // Graceful developer fallback if Resend API key is not configured yet
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY environment variable is not defined.");
      console.log("Simulating email send success. Submission details:", {
        name,
        email,
        subject,
        message,
      });

      // Artificial delay for realistic UI loading experience
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({
        success: true,
        message: "Message simulation successful! Set RESEND_API_KEY to enable live emails.",
        simulated: true,
      });
    }

    // Attempt to send email via Resend
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "harshaddhongade9124@gmail.com";
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: receiver,
      subject: `Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="border-bottom: 2px solid #f97316; padding-bottom: 10px; color: #f97316;">New Contact Form Submission</h2>
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

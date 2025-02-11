import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const emailFrom = process.env.EMAIL_FROM || "default@resend.dev";
    const emailTo = process.env.EMAIL_TO?.split(",") || [""];

    await resend.emails.send({
      from: `A1 Staffing <${emailFrom}>`,
      to: emailTo,
      subject: `New Contact Form Submission: ${formData.subject}`,
      text: `
        New contact form submission:
        - Name: ${formData.firstName} ${formData.lastName}
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        - Subject: ${formData.subject}
        - Message: ${formData.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

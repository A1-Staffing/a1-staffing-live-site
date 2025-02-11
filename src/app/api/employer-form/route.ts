import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    await resend.emails.send({
      from: "A1 Staffing <onboarding@resend.dev>",
      to: ["a1staffingprollc@gmail.com"],
      subject: "New Employer Form Submission",
      text: `New employer form submission:
      - Name: ${formData.name}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Company: ${formData.company}
      - Role: ${formData.role}
      - Position: ${formData.position}
      - Work Location: ${formData.workLocation}
      - Position Type: ${formData.positionType}
      - Is Remote: ${formData.isRemote ? "Yes" : "No"}
      - Job Details: ${formData.jobDetails || "Not provided"}
      - Company Sector: ${formData.companySector}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

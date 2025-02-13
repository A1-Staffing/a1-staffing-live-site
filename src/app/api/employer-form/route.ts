import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const emailFrom = process.env.EMAIL_FROM || "default@resend.dev";
    const emailTo = process.env.EMAIL_TO ? process.env.EMAIL_TO.split(",") : [""];

    // Extract form fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const role = formData.get("role") as string;
    const position = formData.get("position") as string;
    const workLocation = formData.get("workLocation") as string;
    const positionType = formData.get("positionType") as string;
    const isRemote = formData.get("isRemote") === "true" ? "Yes" : "No";
    const companySector = formData.get("companySector") as string;

    // Handle file upload
    const file = formData.get("jobDetails") as File | null;
    let attachment = null;

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      attachment = {
        filename: file.name,
        content: buffer.toString("base64"), // Convert file to base64
      };
    }

    // Construct email content
    const emailContent = `
      New employer form submission:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone}
      - Company: ${company}
      - Role: ${role}
      - Position: ${position}
      - Work Location: ${workLocation}
      - Position Type: ${positionType}
      - Is Remote: ${isRemote}
      - Company Sector: ${companySector}
    `;

    // Send email via Resend
    await resend.emails.send({
      from: `A1 Staffing <${emailFrom}>`,
      to: emailTo,
      subject: "New Employer Form Submission",
      text: emailContent,
      attachments: attachment ? [attachment] : [],
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

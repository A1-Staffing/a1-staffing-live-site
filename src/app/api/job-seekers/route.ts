import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const emailFrom = process.env.EMAIL_FROM || "default@resend.dev";
    const emailTo = process.env.EMAIL_TO ? process.env.EMAIL_TO.split(",") : [""];

    await resend.emails.send({
      from: `A1 Staffing <${emailFrom}>`,
      to: emailTo,
      subject: "New Job Seeker Form Submission",
      text: `New job seeker form submission:
      - Job Role: ${formData.jobRole}
      - Qualification: ${formData.qualification}
      - Experience: ${formData.experience}
      - Company Sector: ${formData.companySector}
      - Is Remote: ${formData.isRemote ? "Yes" : "No"}
      - Resume: ${formData.resume || "No file uploaded"}
      
      Contact Details:
      - Name: ${formData.name}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Address: ${formData.address}
      - Gender: ${formData.gender}
      - Date of Birth: ${formData.dob}

      CAPTCHA: ${formData.captcha}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

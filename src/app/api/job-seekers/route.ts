import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const emailFrom = process.env.EMAIL_FROM || "default@resend.dev";
    const emailTo = process.env.EMAIL_TO ? process.env.EMAIL_TO.split(",") : [""];

    // Extract form fields
    const jobRole = formData.get("jobRole") as string;
    const qualification = formData.get("qualification") as string;
    const experience = formData.get("experience") as string;
    const companySector = formData.get("companySector") as string;
    const isRemote = formData.get("isRemote") === "true";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const gender = formData.get("gender") as string;
    const dob = formData.get("dob") as string;
    const captcha = formData.get("captchaInput") as string;

    // Handle file upload
    const resumeFile = formData.get("resume") as File | null;
    const attachments: { filename: string; content: string; encoding: "base64" }[] = [];

    if (resumeFile) {
      try {
        const arrayBuffer = await resumeFile.arrayBuffer();
        const fileBuffer = Buffer.from(new Uint8Array(arrayBuffer));

        attachments.push({
          filename: resumeFile.name,
          content: fileBuffer.toString("base64"),
          encoding: "base64",
        });
      } catch (error) {
        console.error("Error processing resume file:", error);
        return NextResponse.json({ error: "Failed to process resume file" }, { status: 500 });
      }
    }

    // Send email
    await resend.emails.send({
      from: `A1 Staffing <${emailFrom}>`,
      to: emailTo,
      subject: "New Job Seeker Form Submission",
      text: `New job seeker form submission:
      - Job Role: ${jobRole}
      - Qualification: ${qualification}
      - Experience: ${experience}
      - Company Sector: ${companySector}
      - Is Remote: ${isRemote ? "Yes" : "No"}
      - Resume: ${resumeFile ? resumeFile.name : "No file uploaded"}
      
      Contact Details:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone}
      - Address: ${address}
      - Gender: ${gender}
      - Date of Birth: ${dob}

      CAPTCHA: ${captcha}
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
 
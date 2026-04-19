import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!email) {
    Response.json({
      success: false,
      message: "Email is required",
      status: 500,
    });
    return;
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mehak313naqvi@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}

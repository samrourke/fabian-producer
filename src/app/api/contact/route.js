import { Resend } from "resend";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message, company } = await request.json();

    if (company) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please complete all fields." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Fabian Prynn Website <website@fabianprynn.com>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: `
NEW WEBSITE ENQUIRY

Name:
${name}

Email:
${email}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send enquiry." },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json({ error: "Unable to send enquiry." }, { status: 500 });
  }
}

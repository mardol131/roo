import { resend } from "@roo/shared/src/email/resend";
import { SendEmailProps } from "shared/src/email/functions/sendEmailTemplate";
import { sendError } from "../../functions";

export async function POST(req: Request) {
  const body = await req.json();

  const { from, to, subject, replyTo, html, template } = body;

  if (!from || !to || !subject) {
    return sendError({ code: 400, message: "Missing data" });
  }

  if (!html && !template) {
    return sendError({ code: 400, message: "Missing email body" });
  }

  const emailData: SendEmailProps = template
    ? {
        from,
        to,
        subject,
        replyTo,
        template: template,
      }
    : {
        from,
        to,
        subject,
        replyTo,
        html: html,
      };

  try {
    await resend.sendEmail(emailData);

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return sendError({ code: 400, message: "somwthing went wrong" });
  }
}

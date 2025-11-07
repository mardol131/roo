import { SendEmailProps } from "@roo/shared/src/email/functions/sendEmail";
import { EmailSegments, resend } from "@roo/shared/src/email";

export async function sendEmailTemplate({
  segment,
  email,
}: {
  segment: EmailSegments;
  email: string;
}) {
  let sendEmailBody: SendEmailProps | null = null;
  if (segment === "RooContact") {
    sendEmailBody = {
      from: "Roo <roo@rooevent.com>",
      to: [email],
      subject: "Email od Roo",
      templateData: { templateId: "contact-from-client-side" },
    };
  }

  if (segment === "RooNewsletter") {
    sendEmailBody = {
      from: "Roo <roo@rooevent.com>",
      to: [email],
      subject: "Email od Roo",
      templateData: {
        templateId: "subscribe-to-newsletter",
        variables: { heading: "Newsletter" },
      },
    };
  }

  if (segment === "RooWaitlist") {
    sendEmailBody = {
      from: "Roo <roo@rooevent.com>",
      to: [email],
      subject: "Email od Roo",
      templateData: { templateId: "subscribe-to-waitlist" },
    };
  }

  let response = null;

  if (sendEmailBody !== null) {
    response = await resend.sendEmail(sendEmailBody);
  }

  return response;
}

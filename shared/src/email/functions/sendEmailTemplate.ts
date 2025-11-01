import { Resend } from "resend";

type ResendSendEmailOwnProps = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  template: string;
};

type ResendSendEmailTemplateProps = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  template: string;
};

export async function resendSendEmail({
  from,
  to,
  subject,
  html,
}: ResendSendEmailOwnProps | ResendSendEmailTemplateProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: from,
    to: to,
    subject: subject,
    html: html,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

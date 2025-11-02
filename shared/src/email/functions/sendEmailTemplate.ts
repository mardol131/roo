import { Resend } from "resend";
import {
  emailTemplateList,
  EmailTemplateListType,
} from "../templates/_emailTemplateList";

type ResendSendEmailBase = {
  from: string;
  to: string[];
  subject: string;
  replyTo?: string;
};

type ResendSendEmailHtml = ResendSendEmailBase & {
  html: string;
};

type ResendSendEmailTemplate = ResendSendEmailBase & {
  template: EmailTemplateListType;
};

type ResendSendEmailProps = ResendSendEmailHtml | ResendSendEmailTemplate;

export const resend = {
  resendSendEmail,
};

export async function resendSendEmail(props: ResendSendEmailProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const isHtmlEmail = "html" in props;

  let html = "";

  if (isHtmlEmail) {
    html = props.html;
  } else {
    html = emailTemplateList[props.template];
  }

  const { data, error } = await resend.emails.send({
    from: props.from,
    to: props.to,
    subject: props.subject,
    html: html,
    replyTo: props.replyTo,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

import { Resend } from "resend";
import {
  emailTemplateList,
  EmailTemplateListType,
} from "../templates/_emailTemplateList";

type SendEmailBase = {
  from: string;
  to: string[];
  subject: string;
  replyTo?: string;
};

type SendEmailHtml = SendEmailBase & {
  html: string;
};

type SendEmailTemplate = SendEmailBase & {
  template: EmailTemplateListType;
};

export type SendEmailProps = SendEmailHtml | SendEmailTemplate;

export async function sendEmail(props: SendEmailProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const isHtmlEmail = "html" in props;

  let html = "";

  if (isHtmlEmail) {
    html = props.html;
  } else {
    const getTemplate = emailTemplateList[props.template];
    html = getTemplate();
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

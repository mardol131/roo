import { Resend } from "resend";
import {
  emailTemplateList,
  EmailTemplateListType,
} from "../templates/_emailTemplateList";

export type SendEmailBase = {
  from: string;
  to: string[];
  subject: string;
  replyTo?: string;
};

export type ContactClientSideTemplate = {
  templateData: {
    templateId: EmailTemplateListType;
    variables?: Record<string, string | number> | undefined;
  };
};

export type ContactRooSideTemplate = {
  templateData: {
    templateId: EmailTemplateListType;
    variables?: Record<string, string | number> | undefined;
  };
};

export type WaitlistTemplate = {
  templateData: {
    templateId: EmailTemplateListType;
    variables?: Record<string, string | number> | undefined;
  };
};

export type NewsletterTemplate = {
  templateData: {
    templateId: "subscribe-to-newsletter";
    variables: { heading: string };
  };
};

export type SendEmailProps = SendEmailBase & ContactClientSideTemplate;

export async function sendEmail(props: SendEmailProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const template = emailTemplateList[props.templateData.templateId];

  const response = await resend.emails.send({
    from: props.from,
    to: props.to,
    subject: props.subject,
    template: { id: template, variables: props.templateData.variables },
    replyTo: props.replyTo,
  });

  return response;
}

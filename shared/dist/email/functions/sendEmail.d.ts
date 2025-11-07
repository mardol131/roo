import { EmailTemplateListType } from "../templates/_emailTemplateList";
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
        variables: {
            heading: string;
        };
    };
};
export type SendEmailProps = SendEmailBase & ContactClientSideTemplate;
export declare function sendEmail(props: SendEmailProps): Promise<import("resend").CreateEmailResponse>;

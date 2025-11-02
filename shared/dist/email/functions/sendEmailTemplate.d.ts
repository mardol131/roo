import { EmailTemplateListType } from "../templates/_emailTemplateList";
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
export declare function sendEmail(props: SendEmailProps): Promise<void>;
export {};

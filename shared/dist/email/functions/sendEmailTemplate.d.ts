import { EmailTemplateListType } from "../templates/_emailTemplateList";
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
export declare const resend: {
    resendSendEmail: typeof resendSendEmail;
};
export declare function resendSendEmail(props: ResendSendEmailProps): Promise<void>;
export {};

import { Resend } from "resend";
import { emailTemplateList, } from "../templates/_emailTemplateList";
export async function sendEmail(props) {
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

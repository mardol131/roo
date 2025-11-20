import { BrevoTemplateIds } from "../templates/brevoTemplateIds";
type AddContactWithEmail = {
    email: string;
    templateId: BrevoTemplateIds;
    attributes?: Record<string, any>;
};
type AddContactToSegment = AddContactWithEmail;
export declare function addContactToList(props: AddContactToSegment): Promise<void>;
export {};

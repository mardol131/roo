import { EmailSegments } from "../types/segments";
type AddContactWithEmail = {
    email: string;
    contactId?: string;
    segment: EmailSegments;
};
type AddContactWithId = {
    contactId: string;
    email?: string;
    segment: EmailSegments;
};
type AddContactToSegment = AddContactWithEmail | AddContactWithId;
export declare function addContactToSegment(props: AddContactToSegment): Promise<{
    id: string | undefined;
}>;
export {};

import { BrevoEmailingListsIds } from "../types/types";
type AddContactWithEmail = {
    email: string;
    listId: BrevoEmailingListsIds;
    attributes?: Record<string, any>;
};
type AddContactToSegment = AddContactWithEmail;
export declare function addContactToList(props: AddContactToSegment): Promise<{
    response: import("@getbrevo/brevo/dist/requestCompat").IncomingMessage;
    body: import("@getbrevo/brevo").CreateUpdateContactModel;
}>;
export {};

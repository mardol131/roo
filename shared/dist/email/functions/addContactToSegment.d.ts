import { BrevoEmailingListsIds } from "../types/types";
type AddContactWithEmail = {
    email: string;
    listId: BrevoEmailingListsIds;
    attributes?: Record<string, any>;
};
type AddContactToSegment = AddContactWithEmail;
export declare function addContactToList(props: AddContactToSegment): Promise<void>;
export {};

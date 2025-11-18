import { brevoEmailingListsIds, BrevoEmailingListsIds } from "../types/types";

type AddContactWithEmail = {
  email: string;
  listId: BrevoEmailingListsIds;
  attributes?: Record<string, any>;
};

type AddContactToSegment = AddContactWithEmail;

export async function addContactToList(props: AddContactToSegment) {
  const listId = brevoEmailingListsIds[props.listId];
}

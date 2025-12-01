import { newListingInitialData, NewListingSlice } from "../newListingSlice";

export function restartFull(state: NewListingSlice) {
  state = newListingInitialData;
}

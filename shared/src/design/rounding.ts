import { Enum } from "../functions/enum";

export const roundingList = Enum("sm", "md", "lg", "full");

export type RoundingType = keyof typeof roundingList;

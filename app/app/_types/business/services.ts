import Gastro from "@/app/_icons/Gastro";
import {
  ColorsAndGradientsType,
  TextColorType,
} from "@roo/shared/src/design/colors";

export type ListingTypeData = {
  heading: string;
  text: string;
  icon: React.ComponentType;
  color: TextColorType;
  bgColor: ColorsAndGradientsType;
  index: number;
  value: ListingType;
};

export const listingCardsData: {
  gastro: ListingTypeData;
  entertainment: ListingTypeData;
  place: ListingTypeData;
} = {
  gastro: {
    heading: "Gastro",
    text: "Děláš catering, máš foodtruck nebo bar na eventy",
    icon: Gastro,
    color: "secondary",
    bgColor: "secondaryPrimary",
    index: 1,
    value: "gastro",
  },
  place: {
    heading: "Místo",
    text: "Máš prostory, kde pořádáš akce.",
    icon: Gastro,
    color: "primary",
    bgColor: "primary",
    index: 2,
    value: "place",
  },
  entertainment: {
    heading: "Zábava",
    text: "Jsi DJ, kapela, moderátor, kouzelník, tanečnice nebo jakkoliv bavíš hosty",
    icon: Gastro,
    color: "tertiary",
    bgColor: "primaryTertiary",
    index: 3,
    value: "entertainment",
  },
};

export const listingTypeArray: ListingTypeData[] = [
  listingCardsData.gastro,
  listingCardsData.place,
  listingCardsData.entertainment,
];

export type ListingType = "gastro" | "place" | "entertainment";

export const serviceTypeObject = {
  gastro: "Gastro",
  place: "Místo",
  entertainment: "Zábava",
};

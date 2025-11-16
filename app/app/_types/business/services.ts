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

export type ListingType = "gastro" | "place" | "entertainment";

export const serviceTypeObject = {
  gastro: "Gastro",
  place: "Místo",
  entertainment: "Zábava",
};

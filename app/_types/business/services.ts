import { ColorsAndGradientsType, TextColorType } from "@/app/_design/colors";
import Gastro from "@/app/_icons/Gastro";

export const serviceTypeArray: ServiceType[] = [
  "gastro",
  "entertainment",
  "place",
];

export type ServiceType = "gastro" | "place" | "entertainment";

export const serviceTypeObject = {
  gastro: "Gastro",
  entertainment: "Zábava",
  place: "Místo",
};

export const serviceCardsData: {
  gastro: {
    heading: string;
    text: string;
    icon: React.ComponentType;
    color: TextColorType;
    bgColor: ColorsAndGradientsType;
    index: number;
  };
  entertainment: {
    heading: string;
    text: string;
    icon: React.ComponentType;
    color: TextColorType;
    bgColor: ColorsAndGradientsType;
    index: number;
  };
  place: {
    heading: string;
    text: string;
    icon: React.ComponentType;
    color: TextColorType;
    bgColor: ColorsAndGradientsType;
    index: number;
  };
} = {
  gastro: {
    heading: "Gastro",
    text: "Děláš catering, máš foodtruck nebo bar na eventy",
    icon: Gastro,
    color: "secondary",
    bgColor: "secondaryPrimary",
    index: 1,
  },
  entertainment: {
    heading: "Zábava",
    text: "Děláš catering, máš foodtruck nebo bar na eventy",
    icon: Gastro,
    color: "primary",
    bgColor: "primaryTertiary",
    index: 2,
  },
  place: {
    heading: "Místo",
    text: "Děláš catering, máš foodtruck nebo bar na eventy",
    icon: Gastro,
    color: "tertiary",
    bgColor: "tertiarySecondary",
    index: 3,
  },
};

import { CardsSection, CardsSectionProps } from "./cardSection/CardsSection";
import ComparisonSection from "./comparisonSection/ComparisonSection";
import FormSection from "./formSection/FormSection";
import { HeroBackgroundImage } from "./heroSections/HeroBackgroundImage";
import MasonrySection from "./masonrySection/MasonrySection";
import TextImageSection from "./textImageSections/TextImageSection";

export const sectionList = {
  CardsSection,
  ComparisonSection,
  FormSection,
  HeroBackgroundImage,
  TextImageSection,
  MasonrySection,
};

export const sectionListString = {
  cardssection: CardsSection,
  comparisonsection: ComparisonSection,
  formsection: FormSection,
  herosackgroundsmage: HeroBackgroundImage,
  textsmagesection: TextImageSection,
  masonrysection: MasonrySection,
};

export function getSectionByBlockType(blockType: SectionListType) {
  switch (blockType) {
    case "cardssection":
      return sectionListString[blockType];
  }
}

export type SectionListType = keyof typeof sectionListString;

export type PayloadSectionsType = CardsSectionProps & {
  blockType: SectionListType;
};

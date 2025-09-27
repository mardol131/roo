import { CardsSection, CardsSectionProps } from "./cardSection/CardsSection";
import ComparisonSection, {
  ComparisonSectionProps,
} from "./comparisonSection/ComparisonSection";
import FormSection, { FormSectionProps } from "./formSection/FormSection";
import {
  HeroBackgroundImage,
  HeroBackgroundImageProps,
} from "./heroSections/HeroBackgroundImage";
import MasonrySection, {
  MasonrySectionProps,
} from "./masonrySection/MasonrySection";
import TextImageSection, {
  TextImageSectionProps,
} from "./textImageSections/TextImageSection";

export const sectionList = {
  CardsSection,
  ComparisonSection,
  FormSection,
  HeroBackgroundImage,
  TextImageSection,
  MasonrySection,
};

type SectionMap = {
  cardssection: CardsSectionProps;
  comparisonsection: ComparisonSectionProps;
  formsection: FormSectionProps;
  herobackgroundimage: HeroBackgroundImageProps;
  textimagesection: TextImageSectionProps;
  masonrysection: MasonrySectionProps;
};

export const sectionListString: {
  [K in keyof SectionMap]: React.FC<SectionMap[K]>;
} = {
  cardssection: CardsSection,
  comparisonsection: ComparisonSection,
  formsection: FormSection,
  herobackgroundimage: HeroBackgroundImage,
  textimagesection: TextImageSection,
  masonrysection: MasonrySection,
};

export type SectionListType = keyof typeof sectionListString;

export type PayloadSectionsType = {
  [K in keyof SectionMap]: SectionMap[K] & { blockType: K };
}[keyof SectionMap];

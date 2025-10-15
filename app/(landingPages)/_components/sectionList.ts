import { CardsSection, CardsSectionProps } from "./cardSection/CardsSection";
import ComparisonSection, {
  ComparisonSectionProps,
} from "./comparisonSection/ComparisonSection";
import FormSection, { FormSectionProps } from "./formSection/FormSection";
import { HeroOne, HeroOneProps } from "./heroSections/HeroOne";
import MasonrySection, {
  MasonrySectionProps,
} from "./masonrySection/MasonrySection";
import TextImageSection, {
  TextImageSectionProps,
} from "./textImageSections/TextImageSection";

export const sectionsList = {
  CardsSection,
  ComparisonSection,
  FormSection,
  HeroOne,
  TextImageSection,
  MasonrySection,
};

type SectionMap = {
  cardssection: CardsSectionProps;
  comparisonsection: ComparisonSectionProps;
  formsection: FormSectionProps;
  heroOne: HeroOneProps;
  textimagesection: TextImageSectionProps;
  masonrysection: MasonrySectionProps;
};

export const sectionsObject: {
  [K in keyof SectionMap]: React.FC<SectionMap[K]>;
} = {
  cardssection: CardsSection,
  comparisonsection: ComparisonSection,
  formsection: FormSection,
  heroOne: HeroOne,
  textimagesection: TextImageSection,
  masonrysection: MasonrySection,
};

export type SectionListType = keyof typeof sectionsObject;

export type PayloadSectionsType = {
  [K in keyof SectionMap]: SectionMap[K] & { blockType: K };
}[keyof SectionMap];

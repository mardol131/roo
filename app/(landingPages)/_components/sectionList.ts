import { CardsSection, CardsSectionProps } from "./cardSection/CardsSection";
import ComparisonSection, {
  ComparisonSectionProps,
} from "./comparisonSection/ComparisonSection";
import FormSection, { FormSectionProps } from "./formSection/FormSection";
import { HeroBubbleLeft, HeroOneProps } from "./heroSections/HeroBubbleLeft";
import { HeroClean } from "./heroSections/HeroClean";
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
  HeroBubbleLeft,
  TextImageSection,
  MasonrySection,
};

type SectionMap = {
  cardssection: CardsSectionProps;
  comparisonsection: ComparisonSectionProps;
  formsection: FormSectionProps;
  HeroBubbleLeft: HeroOneProps;
  textimagesection: TextImageSectionProps;
  masonrysection: MasonrySectionProps;
};

export const sectionsObject: {
  [K in keyof SectionMap]: React.FC<SectionMap[K]>;
} = {
  cardssection: CardsSection,
  comparisonsection: ComparisonSection,
  formsection: FormSection,
  HeroBubbleLeft: HeroBubbleLeft,
  textimagesection: TextImageSection,
  masonrysection: MasonrySection,
};

export type SectionListType = keyof typeof sectionsObject;

export type PayloadSectionsType = {
  [K in keyof SectionMap]: SectionMap[K] & { blockType: K };
}[keyof SectionMap];

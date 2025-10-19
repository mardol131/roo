import BannerSection from "./bannerSection/BannerSection";
import ComparisonSection from "./comparisonSection/ComparisonSection";
import FaqSection from "./faqSection/FaqSection";
import FormSection from "./formSection/FormSection";
import HeroBubbleSection from "./heroBubbleSection/HeroSection";
import IconsTextSection from "./iconsTextSection/IconsTextSection";
import ImageTextSection from "./imageTextSection/ImageTextSection";
import MasonrySection from "./masonrySection/MasonrySection";
import TextSection from "./textSection/TextSection";

export const sectionsList = {
  BannerSection,
  ComparisonSection,
  TextSection,
  FormSection,
  HeroBubbleSection,
  ImageTextSection,
  MasonrySection,
  FaqSection,
  IconsTextSection,
};

export type SectionsListType = typeof sectionsList;

export type SectionListType = keyof typeof sectionsList;

export type SectionPropsMap = {
  [K in keyof SectionsListType]: React.ComponentProps<SectionsListType[K]> & {
    blockType: K;
  };
}[keyof SectionsListType];

export type PayloadSectionsMapType = SectionPropsMap[keyof SectionPropsMap];

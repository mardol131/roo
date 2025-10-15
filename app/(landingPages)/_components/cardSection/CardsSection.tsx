import { iconsList, IconsList } from "@/app/_icons/_iconsList";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import { textColor, TextColorType } from "@/app/_design/colors";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import Link from "next/link";
import { OverlayType } from "@/app/_types/objects";
import { PayloadTextSectionType } from "@/app/_design/text";
import { textAlign, TextAlignType } from "@/app/_design/orientation";
import { PayloadRichTextGenerator } from "@/app/_functions/transformations/payloadRichTextGenerator";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";

export type CardSectionCardProps = {
  heading: TextProps;
  texts: TextProps[];
  align?: TextAlignType;
  icon?: IconsList;
  color: TextColorType;
  href?: string;
  mobileOrientation: "col" | "row";
};

function Card(props: CardSectionCardProps) {
  const Icon = props.icon && iconsList[props.icon];

  const cardContent = (
    <div
      className={`${props.align && textAlign[props.align]} border ${
        props.mobileOrientation === "col" ? "flex-col" : " md:flex-col flex-row"
      } flex  items-center hover:scale-105 animate shadow-lg bg-white border-borderLight rounded-medium md:p-14 p-8 gap-4`}
    >
      {Icon && (
        <Icon
          className={` ${props.color && textColor[props.color]} w-20 h-20`}
        />
      )}
      <Text {...props.heading} />
      <div>
        <GenerateTexts texts={props.texts} />
      </div>
    </div>
  );

  if (props.href) {
    return <Link href={props.href}>{cardContent}</Link>;
  }
  return cardContent;
}

export type CardsSectionProps = {
  headingOne: TextProps;
  headingTwo: TextProps;
  cards: CardSectionCardProps[];
  overlay?: OverlayType;
};

export function CardsSection(props: CardsSectionProps) {
  console.log(props);
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="flex flex-col gap-20 text-center items-center justify-center w-full max-w-landingWrapper">
        <div>
          <Text {...props.headingOne} />
          <Text {...props.headingTwo} />
        </div>
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-15 max-w-300">
          {props.cards.map((card, i) => {
            return <Card key={i} {...card} />;
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

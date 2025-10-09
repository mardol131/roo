import { iconsList, IconsList } from "@/app/_icons/_iconsList";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import { textColor, TextColorType } from "@/app/_design/colors";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import Link from "next/link";
import { OverlayType } from "@/app/_types/objects";
import { PayloadTextSectionType } from "@/app/_design/text";
import { textAlign, TextAlignType } from "@/app/_design/orientation";
import { PayloadRichTextGenerator } from "@/app/_functions/transformations/payloadRichTextGenerator";

export type CardSectionCardProps = {
  text: PayloadTextSectionType | string;
  align?: TextAlignType;
  icon?: IconsList;
  color: TextColorType;
  href?: string;
};

function Card(props: CardSectionCardProps) {
  const Icon = props.icon && iconsList[props.icon];
  if (props.href) {
    return (
      <Link
        className={`${
          props.align && textAlign[props.align]
        } border hover:scale-105 flex flex-col items-center animate shadow-lg bg-white border-borderLight rounded-medium md:p-12 p-8 gap-4`}
        href={props.href}
      >
        {Icon && (
          <Icon
            className={` ${props.color && textColor[props.color]} w-20 h-20`}
          />
        )}
        {typeof props.text === "string" ? (
          <p>{props.text}</p>
        ) : (
          <PayloadRichTextGenerator text={props.text} />
        )}
      </Link>
    );
  }
  return (
    <div
      className={`${
        props.align && textAlign[props.align]
      } border flex flex-col items-center hover:scale-105 animate shadow-lg bg-white border-borderLight rounded-medium md:p-12 p-8 gap-4`}
    >
      {Icon && (
        <Icon
          className={` ${props.color && textColor[props.color]} w-20 h-20`}
        />
      )}
      {typeof props.text === "string" ? (
        <p>{props.text}</p>
      ) : (
        <PayloadRichTextGenerator text={props.text} />
      )}{" "}
    </div>
  );
}

export type CardsSectionProps = {
  heading: LandingHeadingProps;
  cards: CardSectionCardProps[];
  overlay?: OverlayType;
};

export function CardsSection(props: CardsSectionProps) {
  console.log(props);
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="flex flex-col gap-20 text-center items-center justify-center w-full max-w-landingWrapper">
        <LandingHeading {...props.heading} />
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-15 max-w-300">
          {props.cards.map((card, i) => {
            return <Card key={i} {...card} />;
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

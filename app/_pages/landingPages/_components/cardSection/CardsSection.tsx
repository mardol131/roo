import { iconsList, IconsList } from "@/app/_icons/_iconsList";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import {
  ColorsAndGradientsType,
  ColorsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import Link from "next/link";
import { OverlayType } from "@/app/_types/objects";

export type CardSectionCardProps = {
  heading: string;
  text: string;
  icon?: IconsList;
  color: TextColorType;
  href?: string;
};

function Card(props: CardSectionCardProps) {
  const Icon = props.icon && iconsList[props.icon];
  if (props.href) {
    return (
      <Link href={props.href}>
        <div
          className={`${
            props.color && textColor[props.color]
          } border hover:scale-105 animate shadow-lg bg-white border-borderLight rounded-medium p-15 flex flex-col items-center gap-4`}
        >
          {Icon && <Icon className={`w-20 h-20`} />}
          <p className="font-extrabold text-3xl ">{props.heading}</p>
          <p className="text-textNormal font-semibold text-lg">{props.text}</p>
        </div>
      </Link>
    );
  }
  return (
    <div
      className={`${
        props.color && textColor[props.color]
      } border hover:scale-105 animate shadow-lg bg-white border-borderLight rounded-medium p-15 flex flex-col items-center gap-4`}
    >
      {Icon && (
        <Icon
          className={`${props.color && textColor[props.color]} w-20 h-20`}
        />
      )}
      <p style={{ color: props.color }} className="font-extrabold text-3xl ">
        {props.heading}
      </p>
      <p className="text-textNormal font-semibold text-lg">{props.text}</p>
    </div>
  );
}

export type CardsSectionProps = {
  heading: LandingHeadingProps;
  cards: CardSectionCardProps[];
  overlay?: OverlayType;
};

export function CardsSection(props: CardsSectionProps) {
  console.log(props.heading);
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="flex flex-col gap-10 text-center items-center justify-center w-full max-w-landingWrapper">
        <LandingHeading {...props.heading} />
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-4 max-w-300">
          {props.cards.map((card, i) => {
            return <Card key={card.heading + card.text + i} {...card} />;
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

import { iconsList, IconsList } from "@/app/_icons/_iconsList";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import {
  colorsAndGradientsType,
  ColorsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";

type CardSectionCardProps = {
  heading: string;
  text: string;
  icon?: IconsList;
  color: string;
};

function Card(props: CardSectionCardProps) {
  const Icon = props.icon && iconsList[props.icon];

  return (
    <div className="border shadow-lg bg-white border-borderLight rounded-medium p-15 flex flex-col items-center gap-4">
      {Icon && <Icon style={{ color: props.color }} className="w-20 h-20 " />}
      <p style={{ color: props.color }} className="font-extrabold text-3xl ">
        {props.heading}
      </p>
      <p className="font-semibold text-lg">{props.text}</p>
    </div>
  );
}

type CardsSectionProps = {
  headingOne: string;
  headingTwo?: string;
  headingColor?: TextColorType;
  cards: CardSectionCardProps[];
  overlay?: colorsAndGradientsType;
};

export function CardsSection(props: CardsSectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="flex flex-col gap-10 text-center items-center justify-center w-full">
        <div
          className={`${
            props.headingColor && textColor[props.headingColor]
          } text-center h2 font-bold`}
        >
          <h2>{props.headingOne}</h2>
          {props.headingTwo && <h2>{props.headingTwo}</h2>}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-4 max-w-300">
          {props.cards.map((card) => {
            return (
              <Card
                key={card.heading + card.text}
                heading={card.heading}
                text={card.text}
                icon={card.icon}
                color={card.color}
              />
            );
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

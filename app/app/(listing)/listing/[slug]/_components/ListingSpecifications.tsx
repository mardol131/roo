import { RiSoundModuleFill } from "react-icons/ri";
import { ListingSectionWrapper } from "./ListingSectionWrapper";

type ListingIconSectionProps = {
  heading: string;
};

export function ListingSpecifications() {
  return (
    <ListingSectionWrapper>
      <div className="flex flex-col gap-8">
        <ListingIconSection heading="Hudební žánr" />
        <ListingIconSection heading="Vybavení" />
        <ListingIconSection heading="Požadavky" />
      </div>
    </ListingSectionWrapper>
  );
}

export function ListingIconSection(props: ListingIconSectionProps) {
  const icons = [];

  for (let i = 0; i < 7; i++) {
    icons.push(<ListingIcon key={i} text="Mix pult" />);
  }
  return (
    <div className="flex flex-col gap-4 border-b border-borderLight pb-8">
      <h5 className="font-semibold">{props.heading}</h5>
      <div className="grid grid-cols-3 gap-3">{icons}</div>
    </div>
  );
}

type ListingIconProps = {
  text: string;
};

export function ListingIcon(props: ListingIconProps) {
  return (
    <div className="flex items-center gap-10">
      <RiSoundModuleFill className="text-3xl text-primary" />
      <p>{props.text}</p>
    </div>
  );
}

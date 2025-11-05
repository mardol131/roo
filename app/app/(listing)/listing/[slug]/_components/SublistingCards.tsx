import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { ListingSectionWrapper } from "./ListingSectionWrapper";
import image from "@/app/_images/test.jpg";

export function SublistingsCards() {
  return (
    <ListingSectionWrapper heading="Služby">
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="flex gap-2">
            <SublistingCard text="Obsluha" />
            <SublistingCard text="Catering" />
            <SublistingCard text="Něco" />
            <SublistingCard text="Nápad" />

            <FaChevronRight className="text-3xl text-primary self-center" />
          </div>
        </div>
      </div>
    </ListingSectionWrapper>
  );
}

export type SublistingCardProp = {
  text: string;
};

export function SublistingCard(props: SublistingCardProp) {
  return (
    <div className="relative border border-borderLight rounded-medium overflow-hidden">
      <Image
        src={image}
        width={400}
        height={400}
        alt="img"
        className="aspect-square object-cover"
      />
      <h5 className="absolute bottom-2 bg-white/80 text-primary backdrop-blur-sm rounded-medium left-[50%] translate-x-[-50%] flex p-3 max-w-[90%] items-center justify-center font-semibold">
        {props.text}
      </h5>
    </div>
  );
}

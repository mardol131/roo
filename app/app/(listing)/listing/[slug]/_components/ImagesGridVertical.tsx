import { SidesType } from "@roo/shared/src/design/orientation";
import { ListingSectionWrapper } from "./ListingSectionWrapper";
import Image from "next/image";
import image from "@/app/_images/test.jpg";

export type ImagesGridType = {
  direction: SidesType;
};

export function ImagesGridVertical(props: ImagesGridType) {
  return (
    <ListingSectionWrapper>
      <div className="grid grid-cols-2 gap-3 rounded-medium overflow-hidden">
        <div
          className={`${
            props.direction === "right" && "col-start-2 row-start-1"
          } relative overflow-hidden`}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="w-full h-full aspect-square object-cover"
          />
          <div className="absolute bottom-5 left-[50%] translate-x-[-50%] w-[90%] bg-white/70 backdrop-blur-lg px-4 py-5 flex flex-col gap-4 rounded-medium">
            <h4 className="font-semibold text-primary">Nápoje všeho druhu</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quisquam consectetur iure tenetur maiores delectus natus provident
              iusto debitis! Praesentium officiis sit harum voluptatum natus.
              Sapiente harum perspiciatis in iste!
            </p>
          </div>
        </div>
        <div
          className={`${
            props.direction === "right" &&
            "col-start-1 row-start-1 rounded-l-medium"
          } grid grid-cols-2 items-stretch gap-3 overflow-hidden`}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
        </div>
      </div>
    </ListingSectionWrapper>
  );
}

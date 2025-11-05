import Image from "next/image";
import { ListingSectionWrapper } from "./ListingSectionWrapper";
import { ImagesGridType } from "./ImagesGridVertical";
import image from "@/app/_images/test.jpg";

export function ImagesGridHorizontal(props: ImagesGridType) {
  return (
    <ListingSectionWrapper>
      <div className="flex flex-col gap-3 rounded-medium overflow-hidden">
        <div className={`relative overflow-hidden row-start-1`}>
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="w-full h-80 aspect-square object-cover"
          />
          <div
            className={`absolute bottom-5 ${
              props.direction === "right" ? "right-5" : "left-5"
            } max-w-80 bg-white/70 backdrop-blur-lg px-4 py-5 flex flex-col gap-4 rounded-medium`}
          >
            <h4 className="font-bold text-primary">Nápoje všeho druhu</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quisquam consectetur iure tenetur maiores delectus natus provident
              iusto debitis!
            </p>
          </div>
        </div>
        <div className={`grid grid-cols-4 gap-3 items-stretch h-40`}>
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
            className="object-cover"
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

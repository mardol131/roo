import Image from "next/image";
import image from "@/app/_images/test.jpg";
import { ListingSectionWrapper } from "./ListingSectionWrapper";
import { ImagesGridType } from "./ImagesGridVertical";

export function ImagesGridSquare(props: ImagesGridType) {
  return (
    <ListingSectionWrapper>
      <div className="grid grid-rows-2 grid-cols-2 gap-3 rounded-medium overflow-hidden">
        <Image
          src={image}
          width={500}
          height={500}
          alt="image"
          className="w-full col-span-2 h-80 aspect-square object-cover relative overflow-hidden row-start-1"
        />
        <div
          className={`w-full bg-white p-10 flex flex-col gap-4 rounded-medium items-center justify-center`}
        >
          <h2 className="font-bold text-primary w-full text-start">
            Nápoje všeho druhu
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus, quae voluptatibus unde, ad eum labore modi ratione
            itaque architecto laboriosam repellat minima, deserunt adipisci
            nihil assumenda deleniti magnam vel magni!
          </p>
        </div>
        <div className={`grid grid-cols-2 gap-3 items-stretch`}>
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
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="object-cover"
          />
        </div>
      </div>
    </ListingSectionWrapper>
  );
}

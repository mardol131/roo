import { Sides } from "@/app/_design/orientation";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { ImageType, OverlayType } from "@/app/_types/objects";
import Image, { ImageProps } from "next/image";
import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import { colorsAndGradients } from "@/app/_design/colors";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";

type ImageOneProps = {
  blockType: "imageOne";
  image: ImageType;
};

function ImageOne(props: ImageOneProps) {
  return (
    <Image
      className=" w-full object-cover object-center"
      src={getImageSrc(props.image.src, "cms")}
      alt={props.image.alt}
      width={1000}
      height={1000}
    />
  );
}

type ImageGridProps = {
  blockType: "imageGrid";
  imageOne: ImageType;
  imageTwo: ImageType;
  imageThree: ImageType;
  imageFour: ImageType;
  rotate?: boolean;
};

function ImageGrid(props: ImageGridProps) {
  const rotations = [];
  while (rotations.length < 4) {
    rotations.push(props.rotate ? Math.floor(Math.random() * 5) : 0);
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-4 translate-y-10">
        <Image
          style={{ rotate: `${rotations[0]}deg` }}
          className="rounded-lg shadow-lg aspect-square object-cover"
          src={props.imageOne.src}
          alt={props.imageOne.src}
          width={500}
          height={500}
        />
        <Image
          style={{ rotate: `-${rotations[1]}deg` }}
          className="rounded-lg shadow-lg aspect-square object-cover"
          src={props.imageTwo.src}
          alt={props.imageTwo.src}
          width={500}
          height={500}
        />
      </div>
      <div className="grid gap-4">
        <Image
          style={{ rotate: `-${rotations[2]}deg` }}
          className="rounded-lg shadow-lg aspect-square object-cover"
          src={props.imageThree.src}
          alt={props.imageThree.src}
          width={500}
          height={500}
        />
        <Image
          style={{ rotate: `${rotations[3]}deg` }}
          className="rounded-lg shadow-lg aspect-square object-cover"
          src={props.imageFour.src}
          alt={props.imageFour.src}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

type ImageThreeProps = {
  blockType: "imageThree";
  imageOne: ImageProps;
  imageTwo: ImageProps;
  imageThree: ImageProps;
};

type ImagePartListProps = ImageOneProps | ImageGridProps;

type Props = {
  texts: TextProps[];
  imagePart: ImagePartListProps[];
  buttons?: ButtonProps[];
  textSide: Sides;
  outerOverlay?: OverlayType;
  innerOverlay?: OverlayType;
};

export default function ImageTextSection(props: Props) {
  function getImagePart(field: ImagePartListProps) {
    switch (field.blockType) {
      case "imageOne":
        return <ImageOne {...field} />;

      default:
        return null;
    }
  }

  const innerImage = props.innerOverlay?.image;
  const innerBg = props.innerOverlay?.overlayColor
    ? colorsAndGradients[props.innerOverlay?.overlayColor]
    : props.innerOverlay?.overlayClassname &&
      props.innerOverlay?.overlayClassname;
  return (
    <LandingSectionWrapper overlay={props.outerOverlay}>
      <div
        style={{
          backgroundImage: `url(${innerImage?.src})`,
          backgroundSize: "cover",
        }}
        className={`w-full overflow-hidden ${
          (innerImage?.src || innerBg) && "shadow-xl p-10 rounded-xl"
        }`}
      >
        <div
          className={`${innerBg && innerBg + " p-10 "} md:grid flex ${
            props.textSide === "left" ? "flex-col" : "flex-col-reverse"
          } w-full z-10 grid-cols-2 md:gap-40 gap-10 items-center`}
        >
          {(props.textSide === "left" || props.textSide === undefined) && (
            <>
              <div className="flex flex-col gap-5">
                <GenerateTexts texts={props.texts} />
                {props.buttons && <GenerateButtons buttons={props.buttons} />}
              </div>
              <div className="justify-self-end w-full">
                {getImagePart(props.imagePart[0])}
              </div>
            </>
          )}
          {props.textSide === "right" && (
            <>
              <div className="justify-self-end w-full">
                {getImagePart(props.imagePart[0])}
              </div>
              <div className="flex flex-col gap-5">
                <GenerateTexts texts={props.texts} />
                {props.buttons && <GenerateButtons buttons={props.buttons} />}
              </div>
            </>
          )}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

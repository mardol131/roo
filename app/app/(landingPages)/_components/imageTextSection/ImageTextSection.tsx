import {
  ButtonProps,
  GenerateButtons,
} from "@/app/_components/atoms/button/Button";
import { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import { ImageType, OverlayType } from "@/app/_types/objects";
import { colorsAndGradients } from "@roo/shared/src/design/colors";
import { objectPosition, SidesType } from "@roo/shared/src/design/orientation";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";

type ImageOneProps = {
  blockType: "imageOne";
  image: ImageType;
};

function ImageOne(props: ImageOneProps) {
  const shadow = props.image.shadow ? "shadow-xl" : "";
  const rounded = props.image.rounded ? "rounded-xl" : "";
  const squared = props.image.squared ? "aspect-square" : "";
  const position = props.image.position
    ? objectPosition[props.image.position]
    : "";

  const classes = `${shadow} ${rounded} ${squared} ${position}`;
  return (
    <Image
      className={` ${classes} w-full object-cover object-center`}
      src={getImageSrc(props.image.src, "cms")}
      alt={props.image.alt}
      width={2000}
      height={2000}
    />
  );
}

type ImagePartListProps = ImageOneProps;

type Props = {
  texts: TextProps[];
  imagePart: ImagePartListProps[];
  buttons?: ButtonProps[];
  textSide: SidesType;
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
          (innerImage?.src || innerBg) && "shadow-xl md:p-10 p-4 rounded-xl"
        }`}
      >
        <div
          className={`${innerBg && innerBg + " p-10 "} md:grid flex ${
            props.textSide === "left" ? "flex-col" : "flex-col-reverse"
          } w-full z-10 grid-cols-2 xl:gap-10 max-xl:gap-5 items-center`}
        >
          {(props.textSide === "left" || props.textSide === undefined) && (
            <>
              <div className="flex flex-col gap-8">
                <GenerateTexts texts={props.texts} />
                {props.buttons && <GenerateButtons buttons={props.buttons} />}
              </div>
              <div className="justify-self-end w-full md:p-10">
                {getImagePart(props.imagePart[0])}
              </div>
            </>
          )}
          {props.textSide === "right" && (
            <>
              <div className="justify-self-start w-full md:p-10">
                {getImagePart(props.imagePart[0])}
              </div>
              <div className="flex flex-col gap-8">
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

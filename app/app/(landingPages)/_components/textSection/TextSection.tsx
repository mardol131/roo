import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import {
  ButtonProps,
  GenerateButtons,
} from "@/app/_components/atoms/button/Button";
import { GenerateTexts, TextProps } from "@/app/_components/atoms/text/Text";
import { ImageType, OverlayType } from "@/app/_types/objects";
import Image from "next/image";
import { colorsAndGradients } from "@roo/shared/src/design/colors";

export type ImageBlockProps = {
  blockType?: "imageBlock";
  image: ImageType;
};

export type TextBlockProps = TextProps & {
  blockType?: "TextBlock";
};

type Props = {
  texts: (TextBlockProps | ImageBlockProps)[];
  buttons: ButtonProps[];
  outerOverlay?: OverlayType;
  innerOverlay?: OverlayType;
  imageTop?: ImageType;
  imageBottom?: ImageType;
};

export default function TextSection(props: Props) {
  const bgColor = props.innerOverlay?.overlayColor
    ? colorsAndGradients[props.innerOverlay.overlayColor]
    : props.innerOverlay?.overlayClassname;

  const image = props.innerOverlay?.image;

  return (
    <LandingSectionWrapper overlay={props.outerOverlay}>
      <div
        className={`${image?.src && "rounded-2xl"} relative w-full max-w-230 overflow-hidden flex items-center justify-center`}
      >
        {image?.src && (
          <Image
            src={image.src}
            alt={image.alt || "alt-image"}
            width={1000}
            height={1000}
            className="absolute z-0 w-full h-full object-cover object-center"
          />
        )}
        <div className="flex flex-col gap-15">
          <div
            className={`${
              bgColor && bgColor + " p-10 "
            } z-10 flex flex-col items-center gap-5 text-center w-full max-w-300 border-none`}
          >
            <GenerateTexts texts={props.texts} />
            <div>
              <GenerateButtons buttons={props.buttons} />
            </div>
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

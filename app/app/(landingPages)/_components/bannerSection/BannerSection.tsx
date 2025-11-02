import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import { ButtonProps, GenerateButtons } from "@/app/_components/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import { OverlayType } from "@/app/_types/objects";
import Image from "next/image";
import { GenerateWidgets, WidgetType } from "../widgets/widgets";
import { colorsAndGradients } from "@roo/shared/src/design/colors";

type Props = {
  texts: TextProps[];
  overlay: OverlayType;
  buttons?: ButtonProps[];
  widgets?: WidgetType[];
};

export default function BannerSection(props: Props) {
  const bgColor = props.overlay?.overlayColor
    ? colorsAndGradients[props.overlay.overlayColor]
    : props.overlay.overlayClassname;

  const image = props.overlay.image;
  return (
    <LandingSectionWrapper>
      <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
        {image?.src && (
          <Image
            src={image.src}
            alt={image.alt || "alt-image"}
            width={1000}
            height={1000}
            className={`absolute w-full h-full object-cover object-center`}
          />
        )}
        <div
          className={` ${bgColor} relative z-0 h-full w-full gap-5 md:p-15 p-5 flex flex-col items-start justify-center overflow-hidden`}
        >
          <GenerateTexts texts={props.texts} />
          {props.widgets && <GenerateWidgets widgets={props.widgets} />}
          {props.buttons && <GenerateButtons buttons={props.buttons} />}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

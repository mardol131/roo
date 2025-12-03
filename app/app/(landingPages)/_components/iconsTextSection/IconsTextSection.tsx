import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import {
  ButtonProps,
  GenerateButtons,
} from "@/app/_components/atoms/button/Button";
import { GenerateTexts, TextProps } from "@/app/_components/atoms/text/Text";
import { ImageType, OverlayType } from "@/app/_types/objects";
import { colorsAndGradients } from "@roo/shared/src/design/colors";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";

type IconsTextProps = {
  image: ImageType;
  texts: TextProps[];
  buttons?: ButtonProps[];
  isCard?: boolean;
  overlay?: OverlayType;
};

function IconsTextCard(props: IconsTextProps) {
  const bgColor =
    props.overlay?.overlayColor && `bg-${props.overlay.overlayColor}`;
  if (props.isCard) {
    return (
      <div className="flex relative flex-col items-center justify-between gap-5 max-w-100 w-full h-auto rounded-xl overflow-hidden shadow-xl">
        {props.image.src && (
          <Image
            src={getImageSrc(props.image.src, "cms")}
            alt={props.image.alt}
            width={500}
            height={500}
            className={`${props.image.shadow && "shadow-xl"} ${props.image.rounded && "rounded-xl"} z-0 absolute top-0 left-0 w-full h-full object-cover object-center`}
          />
        )}
        <div
          className={`${bgColor} flex z-10 p-10 w-full h-full flex-col items-center justify-between gap-5 text-center`}
        >
          <GenerateTexts texts={props.texts} />
          {props.buttons && <GenerateButtons buttons={props.buttons} />}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-between gap-5 max-w-70 h-auto">
      <div className="flex flex-col items-center gap-5 text-center">
        {props.image.src && (
          <Image
            src={getImageSrc(props.image.src, "cms")}
            alt={props.image.alt}
            width={500}
            height={500}
            className={`${props.image.shadow && "shadow-xl"} ${props.image.rounded && "rounded-xl"} max-w-50 max-h-50 h-full w-full object-cover object-center`}
          />
        )}
        <GenerateTexts texts={props.texts} />
      </div>
      {props.buttons && <GenerateButtons buttons={props.buttons} />}
    </div>
  );
}

type Props = {
  iconsTextCards: IconsTextProps[];
  texts?: TextProps[];
  overlay?: OverlayType;
};

export default function IconsTextSection(props: Props) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="w-full flex flex-col items-center gap-15">
        {props.texts && (
          <div className="flex flex-col items-center text-center md:max-w-[60%] gap-4">
            <GenerateTexts texts={props.texts} />
          </div>
        )}
        <div className="flex max-xl:flex-col max-xl:items-center max-xl:gap-10 w-full h-full justify-around">
          {props.iconsTextCards.map((card, i) => {
            return <IconsTextCard key={i} {...card} />;
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

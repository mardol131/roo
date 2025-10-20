import { LandingSectionWrapper } from "@/app/(landingPages)/test/_components/wrappers/LandingSectionWrapper";
import { colorsAndGradients } from "@/app/_design/colors";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { OverlayType } from "@/app/_types/objects";
import React from "react";
import { FormTextInputProps } from "../formSection/FormSection";
import { GenerateWidgets, WidgetType } from "../widgets/widgets";

type Props = {
  texts: TextProps[];
  overlay: OverlayType;
  buttons?: ButtonProps[];
  widgets?: WidgetType[];
};

export default function BannerSection(props: Props) {
  const bgColor =
    props.overlay?.overlayColor &&
    colorsAndGradients[props.overlay.overlayColor];

  return (
    <LandingSectionWrapper>
      <div
        style={{
          backgroundImage: `url(${props.overlay.image?.src})`,
          backgroundSize: "cover",
        }}
        className="w-full rounded-xl overflow-hidden shadow-xl"
      >
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

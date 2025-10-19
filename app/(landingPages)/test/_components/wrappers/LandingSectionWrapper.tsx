import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { OverlayType } from "@/app/_types/objects";
import { ReactNode } from "react";

type SectionWrapperProps = {
  classNameOuter?: string;
  classNameInner?: string;
  children: ReactNode;
  overlay?: OverlayType;
};

export function LandingSectionWrapper(props: SectionWrapperProps) {
  const content = (
    <div
      className={`${props.classNameOuter} ${
        props.overlay?.overlayColor &&
        colorsAndGradients[props.overlay.overlayColor]
      } relative z-0 w-full flex items-center justify-center overflow-hidden p-5`}
    >
      <div
        className={`${props.classNameInner} flex items-center justify-center h-full max-w-contentWrapper w-full py-20`}
      >
        {props.children}
      </div>
    </div>
  );

  if (props.overlay?.image) {
    return (
      <div
        style={{
          backgroundImage: `url(${props.overlay.image})`,
          backgroundSize: "cover",
        }}
      >
        {content}
      </div>
    );
  }

  return content;
}

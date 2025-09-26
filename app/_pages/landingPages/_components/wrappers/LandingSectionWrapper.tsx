import {
  colorsAndGradients,
  colorsAndGradientsType,
} from "@/app/_design/colors";
import { ReactNode } from "react";

type SectionWrapperProps = {
  classNameOuter?: string;
  classNameInner?: string;
  children: ReactNode;
  image?: string;
  overlay?: colorsAndGradientsType;
};

export function LandingSectionWrapper(props: SectionWrapperProps) {
  if (props.image) {
    return (
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`${props.classNameOuter} ${
            props.overlay && colorsAndGradients[props.overlay]
          }  relative z-0 w-full h-full flex items-center justify-center overflow-hidden`}
        >
          <div
            className={`${props.classNameInner} flex items-center justify-center h-full max-w-contentWrapper w-full p-5 py-30`}
          >
            {props.children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${props.classNameOuter} ${
        props.overlay && colorsAndGradients[props.overlay]
      } relative z-0 w-full flex items-center justify-center overflow-hidden`}
    >
      <div
        className={`${props.classNameInner} flex items-center justify-center h-full max-w-contentWrapper w-full p-5 py-30`}
      >
        {props.children}
      </div>
    </div>
  );
}

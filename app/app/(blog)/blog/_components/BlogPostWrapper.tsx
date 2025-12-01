import { OverlayType } from "@/app/_types/objects";
import { colorsAndGradients } from "@roo/shared/src/design/colors";
import { ReactNode } from "react";

type SectionWrapperProps = {
  classNameOuter?: string;
  classNameInner?: string;
  children: ReactNode;
  overlay?: OverlayType;
};

export function BlogPostWrapper(props: SectionWrapperProps) {
  const bgColor =
    props.overlay?.overlayColor &&
    colorsAndGradients[props.overlay.overlayColor];

  const classnameOuter = `${props.classNameOuter} ${bgColor} ${props.overlay?.overlayClassname}`;

  const image = props.overlay?.image;
  return (
    <div
      className={`${classnameOuter} relative z-0 w-full flex items-center justify-center overflow-hidden p-5`}
    >
      <div
        className={`${props.classNameInner} z-10 flex flex-col items-center justify-center h-full max-w-250 w-full py-10 max-lg:py-10`}
      >
        {props.children}
      </div>
    </div>
  );
}

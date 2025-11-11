import { OverlayType } from "@/app/_types/objects";
import Image from "next/image";
import { ReactNode } from "react";
import { colorsAndGradients } from "@roo/shared/src/design/colors";

type SectionWrapperProps = {
  classNameOuter?: string;
  classNameInner?: string;
  children: ReactNode;
  overlay?: OverlayType;
};

export function LandingSectionWrapper(props: SectionWrapperProps) {
  const bgColor =
    props.overlay?.overlayColor &&
    colorsAndGradients[props.overlay.overlayColor];

  const classnameOuter = `${props.classNameOuter} ${bgColor} ${props.overlay?.overlayClassname}`;

  const image = props.overlay?.image;
  return (
    <div className="relative">
      {image?.src && (
        <Image
          src={image.src}
          alt={image.alt || "alt-image"}
          width={1000}
          height={1000}
          className="absolute z-0 w-full h-full object-cover object-center"
        />
      )}
      <div
        className={`${classnameOuter} relative z-0 w-full flex items-center justify-center overflow-hidden p-5`}
      >
        <div
          className={`${props.classNameInner} z-10 flex items-center justify-center h-full max-w-contentWrapper w-full py-20 max-lg:py-10`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

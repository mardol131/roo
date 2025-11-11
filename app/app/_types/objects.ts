import { ColorsAndGradientsType } from "@roo/shared/src/design/colors";

export type OverlayType = {
  overlayColor?: ColorsAndGradientsType;
  overlayClassname?: string;
  image?: ImageType;
};

export type ImageType = {
  src: string;
  alt: string;
  shadow?: boolean;
  rounded?: boolean;
  squared?: boolean;
};

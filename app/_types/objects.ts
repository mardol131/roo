import { ColorsAndGradientsType } from "../_design/colors";

export type OverlayType = {
  overlayColor?: ColorsAndGradientsType;
  overlayClassname?: string;
  image?: ImageType;
};

export type ImageType = {
  src: string;
  alt: string;
};

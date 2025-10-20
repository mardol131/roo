import { ColorsAndGradientsType } from "../_design/colors";

export type OverlayType = {
  overlayColor?: ColorsAndGradientsType;
  image?: ImageType;
};

export type ImageType = {
  src: string;
  alt: string;
};

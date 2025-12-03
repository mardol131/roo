"use client";

import { useMemo } from "react";

import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";

import { ButtonProps } from "@/app/_components/atoms/button/Button";
import { TextProps } from "@/app/_components/atoms/text/Text";
import { OverlayType } from "@/app/_types/objects";
import { colorsAndGradients } from "@roo/shared/src/design/colors";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import { FormCheckboxInputProps } from "../../../_components/molecules/inputs/FormCheckboxInput";
import { FormMultipleCheckboxInputProps } from "../../../_components/molecules/inputs/FormMultipleCheckboxInput";
import { FormSelectInputProps } from "../../../_components/molecules/inputs/FormSelectInput";
import { FormTextareaInputProps } from "../../../_components/molecules/inputs/FormTextareaInput";
import { FormTextInputProps } from "../../../_components/molecules/inputs/FormTextInput";
import { FormTemplateProps } from "./_components/FormTemplate";
import FormWrapper from "./_components/FormWrapper";

export type FormSectionProps = {
  texts?: TextProps[];
  overlay?: OverlayType;
  button: ButtonProps;
  webhook: string;
  fields: (
    | FormTextInputProps
    | FormSelectInputProps
    | FormCheckboxInputProps
    | FormMultipleCheckboxInputProps
    | FormTemplateProps
    | FormTextareaInputProps
  )[];
};

export default function FormSection(props: FormSectionProps) {
  const { overlay } = useMemo(() => {
    const overlay =
      props.overlay?.overlayColor && `bg-${props.overlay?.overlayColor}`;

    return { overlay };
  }, [, props.overlay]);

  return (
    <LandingSectionWrapper>
      <div
        style={{
          backgroundImage: props.overlay?.image
            ? `url('${getImageSrc(props.overlay?.image?.src, "cms")}')`
            : undefined,
          backgroundSize: "cover",
        }}
        className={` relative w-full rounded-3xl ${overlay && "shadow-xl"}`}
      >
        <div
          className={` ${overlay} rounded-3xl relative z-0 w-full h-full flex items-center justify-center ${overlay && "md:p-10 md:py-20 p-3"}`}
        >
          <FormWrapper {...props} />
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

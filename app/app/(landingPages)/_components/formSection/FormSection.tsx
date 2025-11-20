"use client";

import { FormEvent, useCallback, useMemo, useRef, useState } from "react";

import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";

import { apis } from "@/app/_api/_apis";
import Button, { ButtonProps } from "@/app/_components/atoms/Button";
import Text, { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import { OverlayType } from "@/app/_types/objects";
import { colorsAndGradients } from "@roo/shared/src/design/colors";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import {
  FormCheckboxInput,
  FormCheckboxInputProps,
} from "../../../_components/molecules/inputs/FormCheckboxInput";
import {
  FormMultipleCheckboxInput,
  FormMultipleCheckboxInputProps,
} from "../../../_components/molecules/inputs/FormMultipleCheckboxInput";
import {
  FormSelectInput,
  FormSelectInputProps,
} from "../../../_components/molecules/inputs/FormSelectInput";
import {
  FormTemplate,
  FormTemplateProps,
  FormTemplates,
} from "./_components/FormTemplate";
import {
  FormTextareaInput,
  FormTextareaInputProps,
} from "../../../_components/molecules/inputs/FormTextareaInput";
import {
  FormTextInput,
  FormTextInputProps,
} from "../../../_components/molecules/inputs/FormTextInput";
import Loader from "@/app/_components/molecules/Loader";
import { BrevoEmailingListsIds } from "shared/src/email";
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
      props.overlay?.overlayColor &&
      colorsAndGradients[props.overlay.overlayColor];

    return { overlay };
  }, [, props.overlay]);

  return (
    <LandingSectionWrapper>
      <div
        className={` relative w-full overflow-hidden rounded-3xl ${overlay && "shadow-xl"}`}
      >
        {props.overlay?.image?.src && (
          <Image
            src={getImageSrc(props.overlay?.image?.src, "cms")}
            width={1500}
            height={1500}
            alt={props.overlay.image.alt}
            className="absolute w-full h-full object-cover object-center"
          />
        )}
        <div
          className={` ${overlay} relative z-0 w-full h-full flex items-center justify-center overflow-hidden ${overlay && "md:p-10 md:py-20 p-3"}`}
        >
          <FormWrapper {...props} />
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

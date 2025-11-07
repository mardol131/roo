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
import { EmailSegments } from "shared/src/email";
import {
  FormCheckboxInput,
  FormCheckboxInputProps,
} from "./_components/FormCheckboxInput";
import {
  FormMultipleCheckboxInput,
  FormMultipleCheckboxInputProps,
} from "./_components/FormMultipleCheckboxInput";
import {
  FormSelectInput,
  FormSelectInputProps,
} from "./_components/FormSelectInput";
import {
  FormTemplate,
  FormTemplateProps,
  FormTemplates,
} from "./_components/FormTemplate";
import {
  FormTextareaInput,
  FormTextareaInputProps,
} from "./_components/FormTextareaInput";
import { FormTextInput, FormTextInputProps } from "./_components/FormTextInput";

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  let template: FormTemplates | undefined = undefined;

  const { fields, overlay } = useMemo(() => {
    const fields = props.fields.map((field, i) => {
      switch (field.blockType) {
        case "formtextinput":
          return <FormTextInput key={i} {...field} />;
        case "formselectinput":
          return <FormSelectInput key={i} {...field} />;
        case "formcheckboxinput":
          return <FormCheckboxInput key={i} {...field} />;
        case "formmultiplecheckboxinput":
          return <FormMultipleCheckboxInput key={i} {...field} />;
        case "formtemplate":
          template = field.template;
          return <FormTemplate key={i} {...field} />;
        case "formtextarea":
          return <FormTextareaInput key={i} {...field} />;
        default:
          return null;
      }
    });

    const overlay =
      props.overlay?.overlayColor &&
      colorsAndGradients[props.overlay.overlayColor];

    return { fields, overlay };
  }, [props.fields, props.overlay]);

  const onSubmitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      setIsSuccess(false);
      setIsError(false);
      e.preventDefault();
      const formData = formDataToObject(new FormData(e.currentTarget));
      let success = false;

      if (!template) {
        const response = await apis.general.apiPost(props.webhook, formData);

        if (response.ok) {
          success = true;
          return;
        }
      } else {
        let segment: EmailSegments = "General";

        if (template === "email-collection") {
          segment = "RooNewsletter";
        }

        if (template === "waitlist") {
          segment = "RooWaitlist";
        }

        const response = await apis.emailing.formTemplateSubmit({
          email: formData.email,
          segment: segment,
          ...formData,
        });

        if (response.success) {
          success = true;
        }
      }

      if (success) {
        setIsSuccess(true);
        formRef.current?.reset();
        return;
      }
      setIsError(true);
    },
    [isSuccess, isError]
  );

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
          <form
            ref={formRef}
            onSubmit={(e) => {
              onSubmitHandler(e);
            }}
            className="max-w-170 flex flex-col items-center w-full gap-10 bg-white md:p-10 p-5 py-10 rounded-large shadow-lg"
          >
            {props.texts && (
              <div className="flex flex-col gap-5 text-center">
                {props.texts && <GenerateTexts texts={props.texts} />}
              </div>
            )}
            <div className="md:grid w-full flex flex-col grid-cols-2 gap-5">
              {fields}
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <Button {...props.button} disabled={isSuccess} type="submit" />
              {isSuccess && (
                <Text
                  text="Děkujeme!"
                  level="paragraph3"
                  fontWeight="lg"
                  color="success"
                />
              )}
              {isError && (
                <Text
                  text="Něco se nepovedlo, zkuste to prosím později."
                  level="paragraph3"
                  fontWeight="lg"
                  color="danger"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

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
} from "../../../../_components/molecules/inputs/FormCheckboxInput";
import {
  FormMultipleCheckboxInput,
  FormMultipleCheckboxInputProps,
} from "../../../../_components/molecules/inputs/FormMultipleCheckboxInput";
import {
  FormSelectInput,
  FormSelectInputProps,
} from "../../../../_components/molecules/inputs/FormSelectInput";
import {
  FormTemplate,
  FormTemplateProps,
  FormTemplates,
} from "./../_components/FormTemplate";
import {
  FormTextareaInput,
  FormTextareaInputProps,
} from "../../../../_components/molecules/inputs/FormTextareaInput";
import {
  FormTextInput,
  FormTextInputProps,
} from "../../../../_components/molecules/inputs/FormTextInput";
import Loader from "@/app/_components/molecules/Loader";
import { BrevoEmailingListsIds } from "shared/src/email";

export type FormSectionProps = {
  texts?: TextProps[];
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

export default function FormWrapper(props: FormSectionProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  let template: FormTemplates | undefined = undefined;

  const { fields } = useMemo(() => {
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

    return { fields };
  }, [props.fields]);

  const onSubmitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      setIsLoading(true);
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
        let list: BrevoEmailingListsIds = "general";

        if (template === "email-collection") {
          list = "newsletter";
        }

        if (template === "waitlist") {
          list = "waitlist";
        }

        if (template === "contact") {
          list = "contact";
        }

        const response = await apis.emailing.insertContact({
          email: formData.email,
          list: list,
          attributes: formData,
        });

        if (response.success) {
          success = true;
        }
      }

      if (success) {
        setIsSuccess(true);
        formRef.current?.reset();
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    },
    [isSuccess, isError]
  );

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
      className="max-w-170 flex flex-col items-center w-full gap-7 bg-white md:p-10 p-3 py-7 rounded-large shadow-lg"
    >
      {props.texts && (
        <div className="flex flex-col gap-3 text-center">
          {props.texts && <GenerateTexts texts={props.texts} />}
        </div>
      )}
      <div className="md:grid w-full flex flex-col grid-cols-2 gap-3">
        {fields}
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          <Button {...props.button} disabled={isSuccess} type="submit" />
        )}
        {isSuccess && (
          <Text
            text="Děkujeme!"
            tag="p"
            fontWeight="semibold"
            color="success"
          />
        )}
        {isError && (
          <Text
            text="Něco se nepovedlo, zkuste to prosím později."
            tag="p"
            fontWeight="semibold"
            color="danger"
          />
        )}
      </div>
    </form>
  );
}

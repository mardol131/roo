"use client";

import React, { FormEvent, useRef, useState } from "react";

import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { OverlayType } from "@/app/_types/objects";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import axios from "axios";
import { TextBlockProps } from "../textSection/TextSection";

export type FormTextInputProps = {
  blockType: "formtextinput";
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  spanTwo?: "true" | "false";
  required?: "true" | "false";
};

export function FormTextInput(props: FormTextInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>
      <input
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        required={props.required === "true" || false}
      ></input>
    </div>
  );
}

export type FormTextareaInputProps = {
  blockType: "formtextinput";
  label: string;
  name: string;
  placeholder: string;
  spanTwo?: "true" | "false";
  required?: "true" | "false";
};

export function FormTextareaInput(props: FormTextareaInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 h-50 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        required={props.required === "true" || false}
        className="h-full resize-none"
      />
    </div>
  );
}

type SelectOptionType = {
  text: string;
  value: string;
};

type FormSelectInputProps = {
  blockType: "formselectinput";
  label: string;
  value: string;
  placeholder: string;
  spanTwo?: "true" | "false";
  options: SelectOptionType[];
  required?: "true" | "false";
};

export function FormSelectInput(props: FormSelectInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>

      <select
        required={props.required === "true" || false}
        name={props.value}
        id={props.value}
      >
        <option value="" className="text-textPlaceholder">
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return (
            <option key={option.text} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export type FormCheckboxInputProps = {
  blockType: "formcheckboxinput";
  label: TextBlockProps[];
  value: string;
  spanTwo?: "true" | "false";
  required?: "true" | "false";
  onChange?: (isChecked: boolean, value: string) => void;
  name?: string;
};

export function FormCheckboxInput(props: FormCheckboxInputProps) {
  console.log(props);
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } cursor-pointer flex gap-10 items-center`}
    >
      <input
        type="checkbox"
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e.target.checked, props.value);
          }
        }}
        className="cursor-pointer"
        id={props.value}
        name={props.name || props.value}
        value={props.value}
        required={props.required === "true" || false}
      />
      <label
        htmlFor={props.value}
        className="text-textMedium  cursor-pointer font-semibold"
      >
        {props.label && <GenerateTexts texts={props.label} />}
      </label>
    </div>
  );
}

type FormMultipleCheckboxInputProps = {
  blockType: "formmultiplecheckboxinput";
  checkboxes: FormCheckboxInputProps[];
  label: TextProps[];
  spanTwo?: "true" | "false";
  required?: "true" | "false";
  value: string;
};

function FormMultipleCheckboxInput(props: FormMultipleCheckboxInputProps) {
  const [values, setValues] = useState<string[]>([]);

  function hasValueHandler(isChecked: boolean, value: string) {
    if (isChecked) {
      setValues([...values, value]);
    } else if (!isChecked) {
      const index = values.indexOf(value);

      if (index !== -1) {
        setValues((prev) => prev.filter((v) => v !== value));
      }
    }
  }

  const isRequired =
    props.required === "true" && values.length === 0 ? "true" : "false";

  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } flex flex-col gap-5 w-full items-start justify-start`}
    >
      <div className="">
        {props.label && <GenerateTexts texts={props.label} />}
      </div>
      <div
        className={`${props.spanTwo === "true" ? "grid md:grid-cols-2 gap-x-5" : "flex flex-col"} gap-2 w-full`}
      >
        {props.checkboxes.map((item, i) => {
          return (
            <FormCheckboxInput
              key={item.value + item.label}
              {...item}
              required={isRequired}
              onChange={hasValueHandler}
              name={props.value}
            />
          );
        })}
      </div>
    </div>
  );
}

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
  )[];
};

export default function FormSection(props: FormSectionProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

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
      default:
        return null; // fallback, TypeScript ví, že už by nemělo nastat
    }
  });

  const overlay =
    props.overlay?.overlayColor &&
    colorsAndGradients[props.overlay.overlayColor];

  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    setIsSuccess(false);
    setIsError(false);

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
    try {
      const response = await axios.post(props.webhook, formData);

      if (response.statusText === "OK") {
        setIsSuccess(true);
        formRef.current?.reset();
      }
    } catch {
      setIsError(true);
    }
  }

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
            <div className="flex flex-col gap-5 text-center">
              {props.texts && <GenerateTexts texts={props.texts} />}
            </div>
            <div className="md:grid w-full flex flex-col grid-cols-2 gap-5">
              {fields}
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <Button {...props.button} type="submit" />
              {isSuccess && (
                <Text text="Děkujeme!" level="paragraph3" fontWeight="xl" />
              )}
              {isError && (
                <Text
                  text="Něco se nepovedlo, zkuste to prosím později."
                  level="paragraph3"
                  fontWeight="xl"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

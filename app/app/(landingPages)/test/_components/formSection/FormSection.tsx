"use client";

import React, { FormEvent } from "react";

import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { OverlayType } from "@/app/_types/objects";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { LandingSectionWrapper } from "@/app/(landingPages)/test/_components/wrappers/LandingSectionWrapper";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";

export type FormTextInputProps = {
  blockType: "formtextinput";
  label: string;
  name: string;
  placeholder: string;
  spanTwo?: "true" | "false";
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
        type="text"
        placeholder={props.placeholder}
      ></input>
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
  placeholder: string;
  spanTwo?: "true" | "false";
  options: SelectOptionType[];
};

function FormSelectInput(props: FormSelectInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>

      <select name="pets" id="pet-select">
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

type FormCheckboxInputProps = {
  blockType: "formcheckboxinput";
  label: TextProps[];
  value: string;
  spanTwo?: "true" | "false";
};

function FormCheckboxInput(props: FormCheckboxInputProps) {
  console.log(props);
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } cursor-pointer flex gap-10 items-center`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        id={props.value}
        name={props.value}
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
};

function FormMultipleCheckboxInput(props: FormMultipleCheckboxInputProps) {
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
          return <FormCheckboxInput key={i} {...item} />;
        })}
      </div>
    </div>
  );
}

export type FormSectionProps = {
  texts: TextProps[];
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

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  }

  return (
    <LandingSectionWrapper>
      <div className=" relative w-full overflow-hidden rounded-3xl shadow-xl">
        {props.overlay?.image && (
          <Image
            src={getImageSrc(props.overlay?.image?.src, "cms")}
            width={1500}
            height={1500}
            alt={props.overlay.image.alt}
            className="absolute w-full h-full object-cover object-center"
          />
        )}
        <div
          className={` ${overlay} relative z-0 w-full h-full flex items-center justify-center overflow-hidden md:p-10 md:py-20 p-3`}
        >
          <form
            onSubmit={(e) => {
              onSubmitHandler(e);
            }}
            className="max-w-170 flex flex-col items-center w-full gap-10 bg-white md:p-10 p-5 py-10 rounded-large shadow-lg"
          >
            <div className="flex flex-col gap-5 text-center">
              {<GenerateTexts texts={props.texts} />}
            </div>
            <div className="md:grid w-full flex flex-col grid-cols-2 gap-5">
              {fields}
            </div>
            <div className="flex justify-center">
              <Button {...props.button} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}

import React from "react";

import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { OverlayType } from "@/app/_types/objects";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";

export type FormTextInputProps = {
  blockType: "formtextinput";
  label: string;
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
      <input type="text" placeholder={props.placeholder}></input>
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
  label: TextProps;
  value: string;
  spanTwo?: "true" | "false";
};

function FormCheckboxInput(props: FormCheckboxInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } cursor-pointer flex gap-10 items-center`}
    >
      <input type="checkbox" id={props.value} name={props.value} />
      <label htmlFor={props.value} className="text-textMedium font-semibold">
        <Text {...props.label} />
      </label>
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
      default:
        return null; // fallback, TypeScript ví, že už by nemělo nastat
    }
  });

  const overlay =
    props.overlay?.overlayColor &&
    colorsAndGradients[props.overlay.overlayColor];

  return (
    <LandingSectionWrapper>
      <div
        style={{
          backgroundImage: `url(${props.overlay?.image})`,
          backgroundSize: "cover",
        }}
        className="w-full overflow-hidden rounded-3xl shadow-xl"
      >
        <div
          className={` ${overlay} relative z-0 w-full h-full flex items-center justify-center overflow-hidden p-10 py-20`}
        >
          <form
            action={props.webhook}
            className="max-w-170 flex flex-col items-center w-full gap-10 bg-white md:p-15 p-5 py-10 rounded-large shadow-lg"
          >
            <div className="flex flex-col gap-5 text-center">
              {<GenerateTexts texts={props.texts} />}
            </div>
            <div className="md:grid flex flex-col grid-cols-2 gap-5">
              {fields}
            </div>
            <div className="flex justify-center">
              <Button {...props.button} />
            </div>
          </form>
        </div>{" "}
      </div>
    </LandingSectionWrapper>
  );
}

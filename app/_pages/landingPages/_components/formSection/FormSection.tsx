import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";

import Button from "@/app/_global/atoms/Button";
import { ColorsAndGradientsType } from "@/app/_design/colors";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import { OverlayType } from "@/app/_types/objects";

type FormTextInputProps = {
  blockType: "formtextinput";
  label: string;
  placeholder: string;
  spanTwo?: "true" | "false";
};

function FormTextInput(props: FormTextInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>
      <input type="" placeholder={props.placeholder}></input>
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
  label: string;
  value: string;
  spanTwo?: "true" | "false";
};

function FormCheckboxInput(props: FormCheckboxInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      }  p-3 flex gap-10 items-center`}
    >
      <input type="checkbox" id={props.value} name={props.value} />
      <label htmlFor={props.value} className="text-textMedium font-semibold">
        {props.label}
      </label>
    </div>
  );
}

export type FormSectionProps = {
  heading: LandingHeadingProps;
  text: string;
  image?: string;
  overlay?: OverlayType;
  button: {
    text: string;
  };
  webhook: string;
  fields: (
    | FormTextInputProps
    | FormSelectInputProps
    | FormCheckboxInputProps
  )[];
};

export default function FormSection(props: FormSectionProps) {
  console.log(props);
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

  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <form
        action={props.webhook}
        className="max-w-170 flex flex-col w-full gap-10 bg-white md:p-15 p-5 py-10 rounded-large shadow-lg"
      >
        <LandingHeading {...props.heading} />
        <div className="flex flex-col text-center gap-5">
          <p className="text-lg">{props.text}</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {fields}
          {/* <FormTextInput label="Jméno" placeholder="Jméno" />
          <FormTextInput label="Jméno" placeholder="Jméno" />
          <FormTextInput label="Jméno" placeholder="Jméno" spanTwo />

          <FormTextInput label="Jméno" placeholder="Jméno" spanTwo />
          <FormTextInput label="Jméno" placeholder="Jméno" />
          <FormTextInput label="Jméno" placeholder="Jméno" />
          <FormSelectInput
            label="Vyberte kategorii"
            placeholder="-- vaše kategorie --"
            options={[{ text: "Restaurace", value: "restaurant" }]}
            spanTwo
          />
          <FormSelectInput
            label="Vyberte kategorii"
            placeholder="-- vaše kategorie --"
            options={[{ text: "Restaurace", value: "restaurant" }]}
            spanTwo
          />
          <FormCheckboxInput
            label="Souhlasím se zpracování osobních údajů společností The Roosters s.r.o."
            value="GDPR"
            spanTwo
          />
          <FormCheckboxInput
            label="Souhlasím se zpracování osobních údajů společností The Roosters s.r.o."
            value="marketing"
            spanTwo
          /> */}
        </div>
        <div className="flex justify-center">
          {" "}
          <Button
            className="w-70"
            text={props.button.text}
            size="xl"
            rounding="full"
            bgColor="primarySecondary"
          />
        </div>
      </form>
    </LandingSectionWrapper>
  );
}

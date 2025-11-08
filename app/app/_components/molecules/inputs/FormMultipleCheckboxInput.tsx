import { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import { FormCheckboxInput, FormCheckboxInputProps } from "./FormCheckboxInput";
import { useState } from "react";

export type FormMultipleCheckboxInputProps = {
  blockType: "formmultiplecheckboxinput";
  checkboxes: FormCheckboxInputProps[];
  label: TextProps[];
  spanTwo?: "true" | "false";
  required?: "true" | "false";
  value: string;
};

export function FormMultipleCheckboxInput(
  props: FormMultipleCheckboxInputProps
) {
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
              id={item.id}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
}

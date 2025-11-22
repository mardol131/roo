import { HTMLAttributes, useState } from "react";
import FormInputWrapper from "./FormInputWrapper";

type SelectOptionType = {
  text: string;
  value: string;
};

export type FormSelectInputProps = {
  blockType: "formselectinput";
  label: string;
  value: string;
  placeholder: string;
  spanTwo?: boolean;
  options: SelectOptionType[];
  required?: boolean;
} & HTMLAttributes<HTMLSelectElement>;

export function FormSelectInput(props: FormSelectInputProps) {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <FormInputWrapper isInvalid={isInvalid} spanTwo={props.spanTwo}>
      <label className="text-primary font-semibold">{props.label}</label>

      <select
        defaultValue={props.defaultValue}
        required={props.required || false}
        name={props.value}
        id={props.value}
        onInvalid={() => {
          setIsInvalid(true);
        }}
        onChange={() => {
          setIsInvalid(false);
        }}
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
    </FormInputWrapper>
  );
}

import { HTMLAttributes, useState } from "react";
import FormInputWrapper from "./FormInputWrapper";
import FormInputLabel from "./FormInputLabel";

type SelectOptionType = {
  text: string;
  value: string;
};

const countryOptions: SelectOptionType[] = [
  { text: "Česká republika", value: "cz" },
  { text: "Slovenská republika", value: "sk" },
];

export type FormSelectInputProps = {
  blockType?: "formselectinput";
  label: string;
  value: string;
  placeholder: string;
  spanTwo?: boolean;
  options?: SelectOptionType[];
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  optionsGroup?: "country";
} & HTMLAttributes<HTMLSelectElement>;

export function FormSelectInput(props: FormSelectInputProps) {
  const [isInvalid, setIsInvalid] = useState(false);

  const optionsToRender =
    props.optionsGroup === "country" ? countryOptions : props.options;

  return (
    <FormInputWrapper isInvalid={isInvalid} spanTwo={props.spanTwo}>
      <FormInputLabel text={props.label} />

      <select
        defaultValue={props.defaultValue}
        required={props.required || false}
        name={props.value}
        id={props.value}
        disabled={props.disabled}
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
        {optionsToRender &&
          optionsToRender.map((option) => {
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

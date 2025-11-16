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
};

export function FormSelectInput(props: FormSelectInputProps) {
  return (
    <FormInputWrapper spanTwo={props.spanTwo}>
      <label className="text-primary font-semibold">{props.label}</label>

      <select
        required={props.required || false}
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
    </FormInputWrapper>
  );
}

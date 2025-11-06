import { GenerateTexts } from "@/app/_components/atoms/Text";
import { TextBlockProps } from "../../textSection/TextSection";

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

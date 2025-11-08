import { GenerateTexts } from "@/app/_components/atoms/Text";
import { TextBlockProps } from "../../../(landingPages)/_components/textSection/TextSection";

export type FormCheckboxInputProps = {
  blockType: "formcheckboxinput";
  label: TextBlockProps[];
  value: string;
  spanTwo?: "true" | "false";
  required?: "true" | "false";
  onChange?: (isChecked: boolean, value: string) => void;
  name?: string;
  id?: string;
};

export function FormCheckboxInput(props: FormCheckboxInputProps) {
  return (
    <div
      className={`${props.spanTwo === "true" && "col-span-2"} cursor-pointer`}
    >
      <label className="text-textMedium flex items-center gap-10  cursor-pointer font-semibold">
        <input
          type="checkbox"
          onChange={(e) => {
            if (props.onChange) {
              props.onChange(e.target.checked, props.value);
            }
          }}
          className="cursor-pointer"
          id={props.id || props.name || props.value}
          name={props.name || props.value}
          value={props.value}
          required={props.required === "true" || false}
        />
        {props.label && <GenerateTexts texts={props.label} />}
      </label>
    </div>
  );
}

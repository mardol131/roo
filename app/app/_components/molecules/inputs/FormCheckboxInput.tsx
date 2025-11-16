import { GenerateTexts } from "@/app/_components/atoms/Text";
import { TextBlockProps } from "../../../(landingPages)/_components/textSection/TextSection";
import { ChangeEvent, FormEvent } from "react";

export type FormCheckboxInputProps = {
  blockType?: "formcheckboxinput";
  label: TextBlockProps[];
  value: string;
  spanTwo?: boolean;
  required?: boolean | boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  className?: string;
  isChecked?: boolean;
};

export function FormCheckboxInput(props: FormCheckboxInputProps) {
  return (
    <div
      className={` ${props.spanTwo && "col-span-2"} cursor-pointer ${props.className}`}
    >
      <label className="text-textMedium flex items-center gap-10  cursor-pointer font-semibold">
        <input
          type="checkbox"
          onChange={(e) => {
            if (props.onChange) {
              props.onChange(e);
            }
          }}
          checked={props.isChecked}
          className="cursor-pointer"
          id={props.id || props.name || props.value}
          name={props.name || props.value}
          value={props.value}
          required={props.required || false}
        />
        {props.label && <GenerateTexts texts={props.label} />}
      </label>
    </div>
  );
}

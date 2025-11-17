"use client";

import Text, { GenerateTexts } from "@/app/_components/atoms/Text";
import { TextBlockProps } from "../../../(landingPages)/_components/textSection/TextSection";
import { ChangeEvent, useState } from "react";

export type FormCheckboxInputProps = {
  blockType?: "formcheckboxinput";
  label: TextBlockProps;
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
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div
      className={` ${props.spanTwo && "col-span-2"} ${isInvalid && props.required && "bg-red-50 border border-danger"} p-1 rounded-md cursor-pointer ${props.className}`}
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
          onInvalid={() => setIsInvalid(true)}
          onInput={() => setIsInvalid(false)}
        />
        <Text
          {...props.label}
          color={isInvalid && props.required ? "danger" : "black"}
        />
      </label>
    </div>
  );
}

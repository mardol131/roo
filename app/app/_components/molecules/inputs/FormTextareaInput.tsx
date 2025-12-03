"use client";

import { useState } from "react";
import FormInputWrapper from "./FormInputWrapper";

export type FormTextareaInputProps = {
  blockType: "formtextarea";
  label: string;
  name: string;
  placeholder: string;
  spanTwo?: boolean;
  required?: boolean;
  disabled?: boolean;
};

export function FormTextareaInput(props: FormTextareaInputProps) {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <FormInputWrapper isInvalid={isInvalid} spanTwo>
      <label className="text-primary font-semibold">{props.label}</label>
      <textarea
        onInvalid={() => {
          setIsInvalid(true);
        }}
        onChange={() => {
          setIsInvalid(false);
        }}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required || false}
        className={`w-full resize-y p-1 flex items-center h-full text-left border rounded-lg ${
          props.disabled
            ? "bg-gray-100 cursor-not-allowed text-gray-400"
            : "bg-white hover:border-primary cursor-pointer"
        } ${isInvalid ? "border-red-500" : "border-borderLight"}`}
      />
    </FormInputWrapper>
  );
}

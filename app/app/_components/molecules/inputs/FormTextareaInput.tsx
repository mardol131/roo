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
        className="h-full resize-y"
      />
    </FormInputWrapper>
  );
}

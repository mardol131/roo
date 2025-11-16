"use client";
import { useState } from "react";
import FormInputWrapper from "./FormInputWrapper";

export type FormTextInputProps = {
  blockType?: "formtextinput";
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "phone";
  placeholder: string;
  spanTwo?: boolean;
  required?: boolean;
  className?: string;
  value?: any;
  outerBorder?: boolean;
  bgFilled?: boolean;
  disabled?: boolean;
};

export function FormTextInput(props: FormTextInputProps) {
  const {
    disabled,
    label,
    name,
    type,
    placeholder,
    spanTwo,
    required,
    value,
    bgFilled,
  } = props;

  const [isInvalid, setIsInvalid] = useState(false);

  const inputType = props.type || "text";

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (type === "phone") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 9);
    }
  }

  return (
    <FormInputWrapper
      isInvalid={isInvalid}
      spanTwo={spanTwo}
      bgFilled={bgFilled}
    >
      <label className="text-primary font-semibold">{label}</label>
      <div className="flex items-center justify-start gap-2">
        {type === "phone" && (
          <>
            <select
              disabled={disabled}
              name="countryCode"
              id="countryCode"
              className="font-semibold"
            >
              <option value="+420">+420</option>
              <option value="+421">+421</option>
            </select>
          </>
        )}
        <input
          onInvalid={() => {
            setIsInvalid(true);
          }}
          onInput={() => {
            setIsInvalid(false);
          }}
          name={name}
          type={inputType}
          placeholder={placeholder}
          required={required || false}
          defaultValue=""
          onChange={changeHandler}
          className="w-full"
          value={value}
          minLength={type === "password" ? 8 : 0}
          disabled={disabled}
        ></input>
      </div>
    </FormInputWrapper>
  );
}

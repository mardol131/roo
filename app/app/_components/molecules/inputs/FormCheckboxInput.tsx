"use client";

import Text from "@/app/_components/atoms/Text";
import { ChangeEvent, useState } from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { TextBlockProps } from "../../../(landingPages)/_components/textSection/TextSection";

export type FormCheckboxInputProps = {
  blockType?: "formcheckboxinput";
  label: TextBlockProps;
  value: string;
  spanTwo?: boolean;
  required?: boolean | boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onInput?: () => void;
  onInvalid?: () => void;
  name?: string;
  id?: string;
  className?: string;
  isChecked?: boolean;
  defaultChecked?: boolean;
  ref?: React.Ref<HTMLInputElement | null>;
};

export function FormCheckboxInput(props: FormCheckboxInputProps) {
  const [isInvalid, setIsInvalid] = useState(false);
  const [checked, setChecked] = useState(false);

  const checkboxClass = "text-primary text-lg shrink-0";

  function onInputHandler() {
    setIsInvalid(false);
    props.onInput && props.onInput();
  }

  function onInvalidHandler() {
    setIsInvalid(true);
    props.onInvalid && props.onInvalid();
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    if (props.onChange) {
      props.onChange(e);
    }
    props.onChange && props.onChange(e);
  }

  return (
    <div
      className={` ${props.spanTwo && "col-span-2"} ${isInvalid && props.required && "bg-red-50 border border-danger"} p-1 rounded-md cursor-pointer ${props.className}`}
    >
      <label className="text-textMedium flex items-center gap-5  animate cursor-pointer font-semibold">
        {props.isChecked || checked ? (
          <MdCheckBox className={checkboxClass} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank className={checkboxClass} />
        )}
        <input
          type="checkbox"
          onChange={onChangeHandler}
          defaultChecked={props.defaultChecked}
          checked={props.isChecked}
          className="cursor-pointer hidden"
          id={props.id || props.name || props.value}
          name={props.name || props.value}
          value={props.value}
          required={props.required || false}
          onInvalid={onInvalidHandler}
          onInput={onInputHandler}
        />
        <Text
          {...props.label}
          color={isInvalid && props.required ? "danger" : "black"}
          className="hover:text-primary animate"
        />
      </label>
    </div>
  );
}

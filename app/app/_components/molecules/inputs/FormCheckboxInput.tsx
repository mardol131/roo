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

  // Lokální stav pro UNCONTROLLED režim
  const [internalChecked, setInternalChecked] = useState(
    props.defaultChecked ?? false
  );

  // Poznáme, jestli jsme v kontrolovaném režimu
  const isControlled = props.isChecked !== undefined;

  // Hodnota checkboxu – buď controlled, nebo uncontrolled
  const checked = isControlled ? props.isChecked! : internalChecked;

  function onInputHandler() {
    setIsInvalid(false);
    props.onInput?.();
  }

  function onInvalidHandler() {
    setIsInvalid(true);
    props.onInvalid?.();
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    // pokud nejsme controlled → update lokální state
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }

    // předat event dál
    props.onChange?.(e);
  }

  const checkboxClass = "text-primary text-lg shrink-0";

  return (
    <div
      className={` ${props.spanTwo && "col-span-2"} ${
        isInvalid && props.required && "bg-red-50 border border-danger"
      } p-1 rounded-md cursor-pointer ${props.className}`}
    >
      <label className="text-textMedium flex items-center gap-5 animate cursor-pointer font-semibold">
        {checked ? (
          <MdCheckBox className={checkboxClass} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank className={checkboxClass} />
        )}

        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
          className="cursor-pointer hidden"
          id={props.id || props.name || props.value}
          name={props.name || props.value}
          value={props.value}
          required={props.required ?? false}
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

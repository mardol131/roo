"use client";

import { HeadingLevelType } from "@/app/_design/text";
import Text from "@/app/_global/atoms/Text";

export type AdminFormInputType = {
  label: string;
  type: "email" | "text" | "number" | "password";
  name: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  innerBorder?: boolean;
};

export function AdminFormInput({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  className,
  innerBorder,
}: AdminFormInputType) {
  return (
    <div className={`${className} p-1 px-2 flex flex-col`}>
      <label className="text-primary font-semibold">{label}</label>
      <input
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        className={`${
          innerBorder && "border-b-2"
        } pb-1 focus:outline-0 box-border border-borderLight/60 focus:border-primary/15 text-lg placeholder:text-textPlaceholder/30`}
      />
    </div>
  );
}

export type AdminFormCheckboxType = {
  text: string;
  name: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  level?: HeadingLevelType;
};

export function AdminFormCheckbox({
  text,
  name,
  checked,
  onChange,
  level,
}: AdminFormCheckboxType) {
  return (
    <label className="flex gap-4 cursor-pointer">
      <input
        id={name}
        className="shrink-0"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Text level="h3" text={text} color={"black"} />
    </label>
  );
}

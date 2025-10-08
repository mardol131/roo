"use client";

import { Checkbox } from "@/app/_global/filters/Checkbox";

export type AdminFormInputType = {
  label: string;
  type: "email" | "text" | "number" | "password";
  name: string;
  placeholder?: string;
  value?: string | number;
  onChange?: () => void;
};

export function AdminFormInput({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: AdminFormInputType) {
  return (
    <div className="p-1 px-2 flex flex-col ">
      <label className="text-primary font-semibold">{label}</label>
      <input
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        className="pb-1 focus:outline-0 box-border focus:border-b-2 border-b-2 border-borderLight/60 focus:border-primary/15 text-lg placeholder:text-textPlaceholder/30"
      />
    </div>
  );
}

export type AdminFormCheckboxType = {
  text: string;
  name: string;
  value?: string | number;
  onChange?: () => void;
};

export function AdminFormCheckbox({
  text,
  name,
  value,
  onChange,
}: AdminFormCheckboxType) {
  return (
    <label className="flex gap-5">
      <input type="checkbox" />
      <p>{text}</p>
    </label>
  );
}

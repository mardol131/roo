"use client";

import { HTMLAttributes, useRef, useState } from "react";
import FormInputWrapper from "./FormInputWrapper";
import FormInputLabel from "./FormInputLabel";
import {
  countryOptions,
  regionOptions,
  districtOptions,
  cityOptions,
} from "./locationData";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { Category } from "@/app/_redux/slices/newListingSlice/newListingSlice";

export type FormSelectInputProps = {
  blockType?: "formselectinput";
  label: string;
  value: string;
  placeholder: string;
  spanTwo?: boolean;
  options?: Category[];
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  optionsGroup?: "country" | "region" | "district" | "city";
} & HTMLAttributes<HTMLSelectElement>;

export function FormSelectInput(props: FormSelectInputProps) {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.defaultValue || "");
  const [searchQuery, setSearchQuery] = useState("");

  const optionsToRender =
    props.optionsGroup === "country"
      ? countryOptions
      : props.optionsGroup === "region"
        ? regionOptions
        : props.optionsGroup === "district"
          ? districtOptions
          : props.optionsGroup === "city"
            ? cityOptions
            : props.options;

  const getFilteredOptions = () => {
    if (!searchQuery.trim() || !optionsToRender) {
      return optionsToRender || [];
    }
    const query = searchQuery.toLowerCase();
    return optionsToRender.filter((option) =>
      option.label.toLowerCase().includes(query)
    );
  };

  const getSelectedText = () => {
    if (!selectedValue) return props.placeholder;
    const option = optionsToRender?.find((o) => o.slug === selectedValue);
    return option?.label || props.placeholder;
  };

  const selectOption = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    setSearchQuery("");
    setIsInvalid(false);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    setSearchQuery("");
  });

  return (
    <FormInputWrapper isInvalid={isInvalid} spanTwo={props.spanTwo}>
      <FormInputLabel text={props.label} />

      {/* Hidden input for form submission */}
      <input type="hidden" name={props.value} value={selectedValue} />

      {/* Required validation input */}
      {props.required && (
        <input
          type="text"
          required
          value={selectedValue}
          onChange={() => {}}
          style={{ display: "none" }}
          onInvalid={() => setIsInvalid(true)}
        />
      )}

      <div className="relative">
        <button
          type="button"
          disabled={props.disabled}
          onClick={() => !props.disabled && setIsOpen(!isOpen)}
          className={`w-full text-left ${isInvalid ? "border-red-500" : "border-borderLight"}`}
        >
          <span className={!selectedValue ? "text-placeholder" : ""}>
            {getSelectedText()}
          </span>
        </button>

        {isOpen && !props.disabled && (
          <div
            ref={dropdownRef}
            className="absolute z-9999 w-full mt-2 bg-white border border-borderLight rounded-lg shadow-xl"
          >
            {/* Vyhledávací input */}
            <div className="p-3 border-b border-borderLight">
              <input
                type="text"
                placeholder="Hledat..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-borderLight rounded-lg focus:outline-none focus:border-primary"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Seznam možností */}
            <div className="max-h-60 overflow-y-auto p-3 flex flex-col gap-2">
              {getFilteredOptions().length > 0 ? (
                getFilteredOptions().map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectOption(option.slug)}
                    className={`flex items-center font-semibold px-4 py-2 rounded-lg hover:bg-primary/5 cursor-pointer transition-all text-left ${
                      selectedValue === option.slug
                        ? "bg-primary/5 text-primary"
                        : ""
                    }`}
                  >
                    <span>{option.label}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-center text-textPlaceholder">
                  Žádné výsledky
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-90"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </FormInputWrapper>
  );
}

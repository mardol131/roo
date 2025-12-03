"use client";

import { useRef, useState } from "react";
import FormInputWrapper from "./FormInputWrapper";
import FormInputLabel from "./FormInputLabel";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { Category } from "@/app/_redux/slices/newListingSlice/newListingSlice";

export type FormSelectInputProps = {
  blockType?: "formselectinput";
  label: string;
  name: string;
  placeholder: string;
  spanTwo?: boolean;
  options: Category[];
  required?: boolean;
  disabled?: boolean;
  defaultValue?: Category;
  onChangeAction?: (selectedValue: Category) => void;
  onSearchChangeAction?: (searchQuery: string) => void;
  onSearchModalCloseAction?: () => void;
  disableSearch?: boolean;
  usage?: "cms" | "dev";
};

export function FormSelectInput(props: FormSelectInputProps) {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Category | undefined>(
    props.defaultValue
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [stringToSend, setStringToSend] = useState<string | undefined>(
    props.defaultValue
      ? props.usage === "dev"
        ? JSON.stringify(props.defaultValue)
        : props.defaultValue.slug
      : undefined
  );

  const setSearchQueryHandler = (query: string) => {
    setSearchQuery(query);
    if (props.onSearchChangeAction) {
      props.onSearchChangeAction(query);
    }
  };

  const getFilteredOptions = () => {
    if (!searchQuery.trim()) {
      return props.options;
    }
    const query = searchQuery.toLowerCase();
    return props.options.filter((option) =>
      option.label.toLowerCase().includes(query)
    );
  };

  const getSelectedText = () => {
    if (!selectedValue) return props.placeholder;
    return selectedValue.label || props.placeholder;
  };

  const selectOption = (value: Category) => {
    setSelectedValue(value);
    setStringToSend(props.usage === "dev" ? JSON.stringify(value) : value.slug);
    setIsOpen(false);
    setSearchQuery("");
    setIsInvalid(false);
    if (props.onChangeAction) {
      props.onChangeAction(value);
    }
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    setSearchQuery("");
    if (props.onSearchModalCloseAction) {
      props.onSearchModalCloseAction();
    }
  });

  return (
    <FormInputWrapper
      isInvalid={isInvalid}
      spanTwo={props.spanTwo}
      isOpen={isOpen}
    >
      <FormInputLabel text={props.label} />

      {/* Hidden input for form submission */}
      <input
        readOnly
        hidden
        name={props.name}
        value={stringToSend || ""}
        onChange={() => {}}
      />

      {/* Required validation input */}
      {props.required && (
        <input
          type="text"
          required
          value={stringToSend || ""}
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
          className={`w-full p-1 flex items-center h-full text-left border rounded-lg ${
            props.disabled
              ? "bg-gray-100 cursor-not-allowed text-gray-400"
              : "bg-white hover:border-primary cursor-pointer"
          } ${isInvalid ? "border-red-500" : "border-borderLight"}`}
        >
          <span className={!selectedValue ? "text-textPlaceholder" : ""}>
            {getSelectedText()}
          </span>
        </button>

        {isOpen && !props.disabled && (
          <div
            ref={dropdownRef}
            className="absolute z-9999 top-full w-full mt-2 bg-white border border-borderLight rounded-lg shadow-xl"
          >
            {/* Vyhledávací input */}
            {!props.disableSearch && (
              <div className="p-3 border-b border-borderLight">
                <input
                  type="text"
                  placeholder="Hledat..."
                  value={searchQuery}
                  onChange={(e) => setSearchQueryHandler(e.target.value)}
                  className="w-full px-3 py-2 border border-borderLight rounded-lg focus:outline-none focus:border-primary"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            {/* Seznam možností */}
            <div className="max-h-60 overflow-y-auto p-3 flex flex-col gap-2">
              {getFilteredOptions().length > 0 ? (
                getFilteredOptions().map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectOption(option)}
                    className={`flex items-center px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer animate text-left ${
                      selectedValue?.id === option.id
                        ? "bg-primary/10 text-primary hover:text-white font-semibold"
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
          className="fixed inset-0 z-9998"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </FormInputWrapper>
  );
}

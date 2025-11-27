"use client";

import { Fragment, useRef, useState } from "react";
import FormInputWrapper from "./FormInputWrapper";
import FormInputLabel from "./FormInputLabel";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { SpecTag } from "@/app/(admin)/admin/new-listing/_components/steps/NewListingSpecificationStep";
import { Category } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Text from "../../atoms/Text";
import Tag from "../Tag";

type GroupDivider = {
  text: string;
  slugAfter: string;
};

type FormMultiSelectInputProps = {
  blockType?: "formmultipleselectinput";
  label: string;
  name: string;
  placeholder: string;
  spanTwo?: boolean;
  groupDividerTexts?: GroupDivider[];
  options: Category[];
  required?: boolean;
  disabled?: boolean;
  defaultValue?: Category[];
  onChangeAction?: (selectedValues: Category[]) => void;
  largeBaseField?: boolean;
  disableSearch?: boolean;
  usage?: "cms" | "dev";
};

export function FormMultiSelectInput(props: FormMultiSelectInputProps) {
  const [selectedValues, setSelectedValues] = useState<Category[]>(
    props.defaultValue || []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleOption = (value: Category) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(newValues);
    if (props.onChangeAction) {
      props.onChangeAction(newValues);
    }
    setIsInvalid(false);
  };

  const removeOption = (value: Category) => {
    const newValues = selectedValues.filter((v) => v !== value);
    setSelectedValues(newValues);
    if (props.onChangeAction) {
      props.onChangeAction(newValues);
    }
  };

  const getSelectedOptions = () => {
    return selectedValues
      .map((value) => props.options.find((o) => o.id === value.id))
      .filter((option): option is Category => option !== undefined);
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

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    setSearchQuery("");
  });

  const stringToSend =
    props.usage === "dev"
      ? JSON.stringify(selectedValues)
      : selectedValues.map((v) => v.id).join(",");

  return (
    <FormInputWrapper isInvalid={isInvalid} spanTwo={props.spanTwo}>
      <FormInputLabel text={props.label} className="pb-1" />

      {/* Hidden inputs for form submission */}
      <input readOnly hidden name={props.name} value={stringToSend || ""} />

      {/* Required validation input */}
      {props.required && (
        <input
          type="text"
          required
          value={selectedValues.length > 0 ? "valid" : ""}
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
          className={`w-full ${props.largeBaseField ? "min-h-30" : "min-h-10"} flex items-start h-full text-left p-2 border rounded-lg ${
            props.disabled
              ? "bg-gray-100 cursor-not-allowed text-gray-400"
              : "bg-white hover:border-primary cursor-pointer"
          } ${isInvalid ? "border-red-500" : "border-borderLight"}`}
        >
          {selectedValues.length === 0 ? (
            <span className="text-placeholder">{props.placeholder}</span>
          ) : (
            <div className="flex flex-wrap justify-start content-start items-start h-full gap-2">
              {getSelectedOptions().map((option) => {
                return (
                  <Tag
                    key={option.id}
                    color="white"
                    text={option.label}
                    onClick={() => removeOption(option)}
                    disabled={props.disabled}
                  />
                );
              })}
            </div>
          )}
        </button>

        {isOpen && !props.disabled && (
          <div
            ref={dropdownRef}
            className="absolute z-999 w-full mt-2 bg-white border border-borderLight rounded-lg shadow-xl"
          >
            {/* Vyhledávací input */}
            {!props.disableSearch && (
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
            )}

            {/* Seznam možností */}
            <div className="max-h-60 overflow-y-auto p-3 flex flex-col gap-2">
              {getFilteredOptions().length > 0 ? (
                getFilteredOptions().map((option) => {
                  return (
                    <Fragment key={option.id}>
                      {props.groupDividerTexts &&
                        props.groupDividerTexts.map((divider) =>
                          option.slug === divider.slugAfter ? (
                            <Text
                              key={divider.text + divider.slugAfter}
                              text={divider.text}
                              tag="p"
                              size="bodyMd"
                              fontWeight="semibold"
                              color="primary"
                              className="text-gray-500 px-2"
                            />
                          ) : null
                        )}
                      <label className="flex group items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/5 cursor-pointer animate">
                        {selectedValues.includes(option) ? (
                          <MdCheckBox className="text-primary text-lg shrink-0" />
                        ) : (
                          <MdOutlineCheckBoxOutlineBlank className="text-primary text-lg shrink-0" />
                        )}
                        <input
                          type="checkbox"
                          checked={selectedValues.includes(option)}
                          onChange={() => toggleOption(option)}
                          className="mr-3"
                          hidden
                        />
                        <Text
                          text={`${option.label}`}
                          tag="span"
                          size="bodyMd"
                          className="group-hover:text-primary"
                        />
                      </label>
                    </Fragment>
                  );
                })
              ) : (
                <Text
                  text="Žádné výsledky"
                  tag="span"
                  size="bodyMd"
                  className="group-hover:text-primary"
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </FormInputWrapper>
  );
}

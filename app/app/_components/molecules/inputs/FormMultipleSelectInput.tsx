"use client";

import { TextBlockProps } from "@/app/(landingPages)/_components/textSection/TextSection";
import Text, { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { ChangeEvent, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FormCheckboxInput, FormCheckboxInputProps } from "./FormCheckboxInput";
import FormInputWrapper from "./FormInputWrapper";

export type FormMultipleSelectInputProps = {
  blockType: "formmultipleselectinput";
  options: (FormCheckboxInputProps | TextBlockProps)[];
  label: TextProps[];
  spanTwo?: boolean;
  required?: boolean;
  value: string;
};

export function Tag({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button
      className="p-1 cursor-pointer shadow-md bg-primary rounded-md flex items-center gap-2 text-white"
      onClick={onClick}
    >
      <Text
        text={text}
        tag="p"
        size="bodyMd"
        color="white"
        fontWeight="semibold"
      />
      <FaXmark />
    </button>
  );
}

export function FormMultipleSelectInput(props: FormMultipleSelectInputProps) {
  const [values, setValues] = useState<FormCheckboxInputProps[]>([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const checkBoxData = props.options.find((item) => {
      if (item.blockType === "formcheckboxinput") {
        return item.value === e.target.value;
      }
    }) as FormCheckboxInputProps;

    if (e.target.checked) {
      setValues([...values, checkBoxData]);
    } else {
      const index = values.indexOf(checkBoxData);

      if (index !== -1) {
        setValues((prev) => prev.filter((item) => item !== checkBoxData));
      }
    }
  }

  function tagOnClickHandler(tag: FormCheckboxInputProps) {
    setValues((prev) => prev.filter((item) => item !== tag));
  }

  const isRequired = props.required && values.length === 0;

  const modalRef = useRef(null);
  const selectRef = useRef<HTMLInputElement | null>(null);

  useClickOutside(modalRef, () => setToggleModal(false), selectRef);

  function onInvalidHandler() {
    setIsInvalid(true);
  }

  function onInputHandler() {
    setIsInvalid(false);
  }

  return (
    <FormInputWrapper isInvalid={isInvalid} spanTwo={props.spanTwo}>
      <div
        className={`${
          props.spanTwo && "col-span-2"
        } relative flex flex-col gap-2 w-full items-start justify-start`}
      >
        <div className="">
          {props.label && <GenerateTexts texts={props.label} />}
        </div>
        <div
          ref={selectRef}
          onClick={() => {
            setToggleModal(true);
          }}
          className="w-full p-2 border hover:border-primary animate bg-white border-borderLight rounded-lg"
        >
          <div className="w-full flex gap-2 flex-wrap">
            {" "}
            {values.length === 0 ? (
              <div className="p-1">
                <Text
                  tag="p"
                  text="Vyberte kategorie"
                  size="bodyMd"
                  color="placeholder"
                />
              </div>
            ) : (
              values.map((item) => {
                return (
                  <Tag
                    key={item.name + item.value + item.label.text + item.name}
                    text={item.label.text}
                    onClick={() => {
                      tagOnClickHandler(item);
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
        <div
          ref={modalRef}
          className={`flex flex-col p-2 ${toggleModal ? "absolute" : "hidden"} top-full bg-white border mt-0.5 rounded-lg border-borderLight gap-2 w-full`}
        >
          {props.options.map((item, i) => {
            if (item.blockType === "formcheckboxinput") {
              return (
                <FormCheckboxInput
                  key={item.value + item.label}
                  {...item}
                  required={isRequired}
                  onChange={onChangeHandler}
                  onInvalid={onInvalidHandler}
                  onInput={onInputHandler}
                  name={props.value}
                  id={item.id}
                  value={item.value}
                  isChecked={values.some((val) => item.value === val.value)}
                />
              );
            } else if (item.blockType === "TextBlock") {
              return <GenerateTexts key={item.text} texts={[item]} />;
            }
          })}
        </div>
      </div>
    </FormInputWrapper>
  );
}

"use client";

import Button from "@/app/_components/atoms/Button";

import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import Text from "@/app/_components/atoms/Text";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import {
  Category,
  newListing,
} from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { useTranslations } from "next-intl";

type Props = {};

type SpecTagProps = {
  data: Category;
  onClick: (value: Category) => void;
  disableIcon?: boolean;
};

export function SpecTag(props: SpecTagProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        props.onClick(props.data);
      }}
      className="p-1 px-2 flex items-center justify-center gap-1 text-white cursor-pointer shadow-md/20 rounded-full bg-primary"
    >
      <Text
        text={props.data.label}
        tag="p"
        color="white"
        className="font-semibold"
      />
      {!props.disableIcon && <FaXmark />}
    </button>
  );
}

function SpecTagModal(props: SpecTagProps) {
  return (
    <button
      onMouseDown={(e) => {
        e.stopPropagation();
        props.onClick(props.data);
      }}
      className="font-semibold first:bg-primary/20 hover:bg-primary group  animate group px-2 rounded-full cursor-pointer"
    >
      <Text
        text={props.data.label}
        tag="p"
        color="black"
        className="font-semibold group-hover:text-white animate"
      />
    </button>
  );
}

export const specTagMockData: Category[] = [
  { label: "Hotel", value: "hotel", id: "1" },
  { label: "Hrad", value: "hrad", id: "2" },
  { label: "Stodola", value: "stodola", id: "3" },
  { label: "Stan", value: "stan", id: "4" },
  { label: "Sad", value: "sad", id: "5" },
  { label: "Sad", value: "sad", id: "6" },
  { label: "Sad", value: "sad", id: "7" },
  { label: "Sad", value: "sad", id: "8" },
  { label: "Sad", value: "sad", id: "9" },
  { label: "Sad", value: "sad", id: "10" },
  { label: "Sad", value: "sad", id: "11" },
  { label: "Sad", value: "sad", id: "12" },
];

export default function NewspecificationStep({}: Props) {
  const state = useAppSelector((state) => state.newListing);
  const t = useTranslations(
    state.listingData.type
      ? `admin.company.newListing.steps.specification.${state.listingData.type}`
      : "admin.company.newListing.steps.specification.gastro"
  );
  const { changeStepHandler } = useNewListingSteps();
  const [activeSpecs, setActiveSpects] = useState<Category[]>(
    state.listingData.specifications
  );
  const [specModalActive, setSpecModalActive] = useState(false);
  const [input, setInput] = useState<string>("");
  const [searchSpec, setSearchSpec] = useState<Category[]>([]);
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useAppDispatch();

  function specModalActiveHandler() {
    setSpecModalActive(!specModalActive);
  }

  function specModalActiveCloseHandler() {
    setSpecModalActive(false);
  }

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (activeSpecs.length > 0) {
      dispatch(newListing.actions.saveSpecifications(activeSpecs));
      changeStepHandler("listingLocation");
    } else {
      setIsInvalid(true);
    }
  }

  function containerClickHandler() {
    inputRef.current?.focus();
  }

  function deleteTagHandler(data: Category) {
    const activeSpecsArray = activeSpecs.filter((spec) => spec.id !== data.id);
    setActiveSpects([...activeSpecsArray]);
  }

  function addTagHandler(data: Category) {
    setIsInvalid(false);
    if (!activeSpecs.some((specData) => specData.id === data.id)) {
      console.log([...activeSpecs, data]);

      setActiveSpects([...activeSpecs, data]);
      setInput("");
    }
  }

  function inputKeyPressPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && searchSpec.length) {
      e.preventDefault();
      addTagHandler(searchSpec[0]);
    }
    if (e.key === "Backspace" && input?.length === 0) {
      const newSpecArray = activeSpecs.slice(0, activeSpecs.length - 1);
      setActiveSpects(newSpecArray);
    }
  }

  useEffect(() => {
    if (input) {
      const textLength = input?.length || 1;
      const searchArray = specTagMockData.filter((item) => {
        const textSlice = item.label.slice(0, textLength);
        if (
          !activeSpecs.some((activeSpecsItem) => activeSpecsItem.id === item.id)
        ) {
          return textSlice.toLowerCase() === input.toLowerCase();
        }
      });

      setSearchSpec([...searchArray]);
    } else {
      setSearchSpec([]);
    }
  }, [input, activeSpecs]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <AdminNewListingFormWrapper
      onSubmit={onSubmitHandler}
      heading={t("heading")}
      subheading={t("subheading")}
    >
      <div
        className={` ${isInvalid ? "bg-red-50 border border-danger" : "bg-white "} shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <div
          onClick={containerClickHandler}
          className="min-h-50 flex gap-2 col-span-2 flex-wrap items-start content-start justify-start"
        >
          {activeSpecs.map((item) => {
            return (
              <SpecTag
                key={item.label + item.value + item.id}
                data={item}
                onClick={deleteTagHandler}
              />
            );
          })}
          <div className="relative flex">
            <input
              onFocus={specModalActiveHandler}
              onBlur={specModalActiveCloseHandler}
              onKeyDown={inputKeyPressPressHandler}
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder={t("input.placeholder")}
              type="text"
              className="focus:outline-0 w-full text-lg font-semibold border-borderLight flex items-center justify-start"
            />
            {specModalActive && (
              <div className="border top-[120%] border-borderLight absolute h-40 min-w-60 rounded-md bg-white shadow-lg w-full p-4 ">
                <div className="flex flex-col max-h-full gap-2 items-start  overflow-y-auto">
                  {searchSpec.map((item) => {
                    return (
                      <SpecTagModal
                        key={item.label + item.value + item.id}
                        data={item}
                        onClick={addTagHandler}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <Button
          text={t("buttonBack")}
          type="button"
          bgColor="secondaryPrimary"
          size="xl"
          textColor="white"
          rounding="full"
          onClick={() => {
            changeStepHandler("listingName");
          }}
        />
        <Button
          text={t("buttonContinue")}
          type="submit"
          bgColor="secondaryPrimary"
          size="xl"
          textColor="white"
          rounding="full"
        />
      </div>
    </AdminNewListingFormWrapper>
  );
}

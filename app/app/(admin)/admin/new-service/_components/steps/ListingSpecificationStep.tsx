"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormWrapper";
import AdminWrapper from "@/app/(admin)/admin/_components/wrappers/AdminWrapper";
import React, { useEffect, useRef, useState } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import Text from "@/app/_components/atoms/Text";
import { FaXmark } from "react-icons/fa6";

type Props = {};

type SpecTagType = { name: string; value: string };

type SpecTagProps = {
  data: SpecTagType;
  onClick: (value: SpecTagType) => void;
};

function SpecTag(props: SpecTagProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        props.onClick(props.data);
      }}
      className="p-1 px-2 flex items-center justify-center gap-1 text-white cursor-pointer shadow-md/20 rounded-full bg-primary"
    >
      <Text
        text={props.data.name}
        tag="p"
        color="white"
        className="font-semibold"
      />
      <FaXmark />
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
      className="font-semibold first:bg-primary/10 hover:bg-primary bg-white animate group px-2 rounded-full cursor-pointer"
    >
      <Text
        text={props.data.name}
        tag="p"
        color="black"
        className="font-semibold group-hover:text-white animate"
      />
    </button>
  );
}

const mockData: SpecTagType[] = [
  { name: "Hotel", value: "hotel" },
  { name: "Hrad", value: "hrad" },
  { name: "Stodola", value: "stodola" },
  { name: "Stan", value: "stan" },
  { name: "Sad", value: "sad" },
  { name: "Stáj", value: "staj" },
  { name: "Stáj", value: "s" },
  { name: "Stáj", value: "d" },
  { name: "Stáj", value: "w" },
  { name: "Stáj", value: "q" },
  { name: "Stáj", value: "e" },
  { name: "Stáj", value: "u" },
  { name: "Stáj", value: "r" },
  { name: "Stáj", value: "t" },
  { name: "Stáj", value: "z" },
  { name: "Stáj", value: "k" },
  { name: "Stáj", value: "l" },
];

export default function ServiceSpecificationStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const [specs, setSpecs] = useState<SpecTagType[]>([
    { name: "Hello", value: "hello" },
  ]);
  const [specModalActive, setSpecModalActive] = useState(false);
  const [input, setInput] = useState<string>();
  const [searchSpec, setSearchSpec] = useState<SpecTagType[]>([]);

  function specModalActiveHandler() {
    setSpecModalActive(!specModalActive);
  }

  function specModalActiveCloseHandler() {
    setSpecModalActive(false);
  }

  function nextStepHandler() {
    if (specs.length > 0) {
      changeStepHandler("listingLocation");
    }
  }

  function containerClickHandler() {
    inputRef.current?.focus();
  }

  function deleteTagHandler(data: SpecTagType) {
    const specsArray = specs.filter((spec) => spec.value !== data.value);
    setSpecs([...specsArray]);
  }

  function addTagHandler(data: SpecTagType) {
    console.log(data);
    if (!specs.some((specData) => specData.value === data.value)) {
      setSpecs([...specs, data]);
      setInput("");
    }
  }

  function inputKeyPressPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.key);
    if (e.key === "Enter" && searchSpec.length) {
      addTagHandler(searchSpec[0]);
    }
    if (e.key === "Backspace" && input?.length === 0) {
      const newSpecArray = specs.slice(0, specs.length - 1);
      setSpecs(newSpecArray);
    }
  }

  useEffect(() => {
    if (input) {
      const textLength = input?.length || 1;
      const searchArray = mockData.filter((item) => {
        const textSlice = item.name.slice(0, textLength);
        if (!specs.some((specsItem) => specsItem.value === item.value)) {
          return textSlice.toLowerCase() === input.toLowerCase();
        }
      });

      setSearchSpec([...searchArray]);
    } else {
      setSearchSpec([]);
    }
  }, [input, specs]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <AdminWrapper>
      <AdminFormWrapper
        heading={"Co za místo nabízíš?"}
        subheading={"Teď potřebujeme přesně specifikovat místo, které nabízíš."}
      >
        <AdminFormPartWrapper>
          <div
            onClick={containerClickHandler}
            className="min-h-50 flex gap-2 col-span-2 flex-wrap items-start content-start justify-start"
          >
            {specs.map((item) => {
              return (
                <SpecTag
                  key={item.name + item.value}
                  data={item}
                  onClick={deleteTagHandler}
                />
              );
            })}
            <div className="relative">
              <input
                onFocus={specModalActiveHandler}
                onBlur={specModalActiveCloseHandler}
                onKeyDown={inputKeyPressPressHandler}
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="Vložte specifikaci"
                type="text"
                className="focus:outline-0 ml-5 text-lg font-semibold border-borderLight flex items-center justify-start"
              />
              {specModalActive && (
                <div className="border top-[120%] border-borderLight absolute h-40 min-w-60 rounded-md bg-white shadow-lg w-full p-4 ">
                  <div className="flex flex-col max-h-full gap-2 items-start overflow-y-auto">
                    {searchSpec.map((item) => {
                      return (
                        <SpecTagModal
                          key={item.name + item.value}
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
        </AdminFormPartWrapper>
        <Button
          text="Pokračovat"
          type="button"
          bgColor="secondaryPrimary"
          size="xl"
          textColor="white"
          rounding="full"
          onClick={nextStepHandler}
        />
      </AdminFormWrapper>
    </AdminWrapper>
  );
}

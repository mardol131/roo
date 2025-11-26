"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import { useNewListingSteps } from "../_hooks/useNewListingSteps";
import { NewListingStepsArray } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { FaCheck } from "react-icons/fa6";
import { Fragment } from "react";

export function NewListingStepBar() {
  const { step: currentStep } = useAppSelector((state) => state.newListing);
  const { changeStepHandler } = useNewListingSteps();

  const stepsPassed = NewListingStepsArray.findIndex(
    (step) => step === currentStep
  );

  function Divider(i: number) {
    if (i > 0) {
      if (i > stepsPassed) {
        return (
          <div key={i / 1563} className="bg-zinc-300 h-[2px] grow-[1]"></div>
        );
      } else {
        return (
          <div key={i / 84956} className="bg-primary h-[2px] grow-[1]"></div>
        );
      }
    }
  }

  return (
    <div className="border border-borderLight sticky top-0 w-full text-base bg-white flex justify-between items-center rounded-medium shadow-lg shadow-black/5 p-2">
      {NewListingStepsArray.map((step, i) => {
        return (
          <Fragment key={step}>
            {Divider(i)}
            {i < stepsPassed ? (
              <button
                onClick={() => {
                  changeStepHandler(step);
                }}
                className="border-2 cursor-pointer group hover:bg-white animate text-white bg-primary font-bold border-primary w-7 h-7 rounded-full flex items-center justify-center"
              >
                <FaCheck className="text-2xl" />
              </button>
            ) : step === currentStep ? (
              <button
                onClick={() => {
                  changeStepHandler(step);
                }}
                className="border-2 text-primary font-bold border-primary w-7 h-7 rounded-full flex items-center justify-center"
              >
                {i + 1}
              </button>
            ) : (
              <button
                onClick={() => {
                  changeStepHandler(step);
                }}
                className="border-2 text-zinc-300 font-bold border-zinc-300 w-7 h-7 rounded-full flex items-center justify-center"
              >
                {i + 1}
              </button>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

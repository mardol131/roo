"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import { useNewListingSteps } from "../_hooks/useNewListingSteps";
import { NewListingStepsArray } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { FaCheck, FaTrophy } from "react-icons/fa6";
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
          <div
            key={i / 1563}
            className="bg-zinc-300 h-0.5 rounded-full grow md:mx-3"
          ></div>
        );
      } else {
        return (
          <div
            key={i / 84956}
            className="bg-primary h-0.5 rounded-full grow md:mx-3"
          ></div>
        );
      }
    }
  }

  return (
    <div className="border border-borderLight sticky top-0 w-full text-base bg-white flex justify-between items-center rounded-medium shadow-lg shadow-black/5 p-2">
      {NewListingStepsArray.map((step, i) => {
        let bubbleClass = "";
        let icon: React.ReactNode = "";
        if (i < stepsPassed) {
          bubbleClass +=
            "border-2 cursor-pointer group hover:bg-white animate text-white bg-primary font-bold border-primary w-8 h-8 rounded-full flex items-center justify-center";
          icon = <FaCheck className="text-2xl" />;
        } else if (step === currentStep) {
          bubbleClass +=
            "border-2 text-primary font-bold border-primary w-8 h-8 rounded-full flex items-center justify-center";
        } else {
          bubbleClass +=
            "border-2 text-zinc-300 font-bold border-zinc-300 w-8 h-8 rounded-full flex items-center justify-center";
        }

        if (i === NewListingStepsArray.length - 1) {
          icon = <FaTrophy className="text-2xl p-1" />;
        }
        return (
          <Fragment key={step}>
            {Divider(i)}
            <button
              onClick={() => {
                changeStepHandler(step);
              }}
              className={bubbleClass}
            >
              {icon ? icon : i + 1}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}

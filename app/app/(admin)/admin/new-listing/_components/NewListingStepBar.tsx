"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import { useNewListingSteps } from "../_hooks/useNewListingSteps";
import { NewListingStepsArray } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { FaCheck } from "react-icons/fa6";

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
    <div className="border border-borderLight sticky top-0 w-full text-lg bg-white flex justify-between items-center rounded-medium shadow-lg shadow-black/5 p-3">
      {NewListingStepsArray.map((step, i) => {
        return (
          <>
            {Divider(i)}
            <div>
              {i < stepsPassed ? (
                <>
                  {i < stepsPassed && (
                    <>
                      <button
                        onClick={() => {
                          changeStepHandler(step);
                        }}
                        className="border-2 cursor-pointer text-white bg-primary font-bold border-primary w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <FaCheck className="text-2xl" />
                      </button>
                    </>
                  )}
                </>
              ) : step === currentStep ? (
                <button
                  onClick={() => {
                    changeStepHandler(step);
                  }}
                  className="border-2 text-primary font-bold border-primary w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {i + 1}
                </button>
              ) : (
                <button
                  onClick={() => {
                    changeStepHandler(step);
                  }}
                  className="border-2 text-zinc-300 font-bold border-zinc-300 w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {i + 1}
                </button>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}

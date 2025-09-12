import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export type CounterType = {
  addFunction: () => void;
  removeFunction: () => void;
  value: number;
  stateChangerOnUserInteract: (value: number) => void;
};

export function Counter(props: CounterType) {
  return (
    <div className="grid bg-white grid-cols-3 items-center justify-items-center gap-2 p-3">
      <button
        onClick={props.removeFunction}
        className="border w-10 h-10 p-3 rounded-full border-borderLight hover:bg-pink/10 transition-all ease-in-out cursor-pointer"
      >
        <FaMinus />
      </button>

      <input
        onChange={(e) => {
          const value = Number(e.target.value);
          if (!isNaN(value)) {
            props.stateChangerOnUserInteract(value);
          }
        }}
        type="number"
        className="font-semibold w-12 h-12 border border-borderLight rounded-lg text-center flex items-center justify-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        value={props.value}
      />

      <button
        onClick={props.addFunction}
        className="border w-10 h-10 p-3 rounded-full border-borderLight hover:bg-pink/10 transition-all ease-in-out cursor-pointer"
      >
        <FaPlus />
      </button>
    </div>
  );
}

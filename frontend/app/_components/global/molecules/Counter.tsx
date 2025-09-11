import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export type CounterType = {
  addFunctions: () => void;
  removeFunction: () => void;
  value: number;
};

export function PeopleCounter(props: CounterType) {
  return (
    <div className="grid bg-white grid-cols-3 items-center justify-items-center gap-2 p-3">
      <button
        onClick={props.removeFunction}
        className="border w-10 h-10 p-3 rounded-full border-borderLight hover:bg-orange/40 hover:shadow-md transition-all ease-in-out cursor-pointer"
      >
        <FaMinus />
      </button>

      <p className="w-12 h-12 border border-borderLight rounded-lg flex items-center justify-center">
        {props.value}
      </p>
      <button
        onClick={props.addFunctions}
        className="border w-10 h-10 p-3 rounded-full border-borderLight hover:bg-orange/40 hover:shadow-md transition-all ease-in-out cursor-pointer"
      >
        <FaPlus />
      </button>
    </div>
  );
}

"use client";

import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import {
  GuestType,
  initialFilterSlice,
} from "@/app/_redux/slices/initialFilterSlice";
import HeaderSettingsWrapper from "../../wrappers/HeaderSettingsWrapper";
import { CounterType, PeopleCounter } from "../molecules/Counter";
import { lowerHeaderStep } from "@/app/_redux/slices/lowerHeaderStepsSlice";

type Props = {};

export default function PeopleSettings({}: Props) {
  const { guests } = useAppSelector((state) => state.initialFilter);
  const dispatch = useAppDispatch();

  function addGuests(type: GuestType) {
    dispatch(initialFilterSlice.actions.increment(type));
  }

  function removeGuests(type: GuestType) {
    dispatch(initialFilterSlice.actions.decrement(type));
  }

  return (
    <HeaderSettingsWrapper>
      <div className="max-w-lowerHeader w-full flex justify-end">
        <div
          onMouseLeave={() => {
            dispatch(lowerHeaderStep.actions.changeStep(null));
          }}
          className="p-8 bg-white rounded-xl border-borderLight shadow-xl"
        >
          <GuestsCounter
            addFunctions={() => {
              addGuests("adult");
            }}
            removeFunction={() => {
              removeGuests("adult");
            }}
            value={guests.adult}
            text="Dospělí"
          />
          <GuestsCounter
            addFunctions={() => {
              addGuests("minor");
            }}
            removeFunction={() => {
              removeGuests("minor");
            }}
            value={guests.minor}
            text="Děti"
          />
          <GuestsCounter
            addFunctions={() => {
              addGuests("ztp");
            }}
            removeFunction={() => {
              removeGuests("ztp");
            }}
            value={guests.ztp}
            text="ZTP"
          />
          <GuestsCounter
            addFunctions={() => {
              addGuests("pets");
            }}
            removeFunction={() => {
              removeGuests("pets");
            }}
            value={guests.pets}
            text="Mazlíčci"
          />
        </div>
      </div>
    </HeaderSettingsWrapper>
  );
}

export function GuestsCounter(props: CounterType & { text: string }) {
  return (
    <div className="grid grid-cols-2 items-center border-b border-borderLight">
      <p className="font-semibold select-none">{props.text}</p>
      <PeopleCounter
        addFunctions={props.addFunctions}
        removeFunction={props.removeFunction}
        value={props.value}
      />
    </div>
  );
}

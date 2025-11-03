"use client";

import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import {
  GuestType,
  headerFilterSlice,
} from "@/app/_redux/slices/headerFilterSlice";
import { useRef } from "react";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { Counter, CounterType } from "../../filters/Counter";

type Props = {};

export default function GuestsSettings({}: Props) {
  const { guests } = useAppSelector((state) => state.headerFilter);
  const dispatch = useAppDispatch();
  function nullHeaderSettings() {
    dispatch(headerFilterSlice.actions.changeSettings(null));
  }
  const settingsRef = useRef(null);
  useClickOutside(settingsRef, nullHeaderSettings);

  function addGuests(type: GuestType) {
    dispatch(headerFilterSlice.actions.increment(type));
  }

  function removeGuests(type: GuestType) {
    dispatch(headerFilterSlice.actions.decrement(type));
  }

  function changeValueOnUserInput(type: GuestType, value: number) {
    dispatch(
      headerFilterSlice.actions.changeOnUserInput({
        guestType: type,
        value: value,
      })
    );
  }

  return (
    <div className="max-w-lowerHeader w-full flex justify-end">
      <div
        onMouseLeave={nullHeaderSettings}
        className="p-8 bg-white rounded-large border border-borderLight shadow-xl"
      >
        <GuestsCounter
          addFunction={() => {
            addGuests("adult");
          }}
          removeFunction={() => {
            removeGuests("adult");
          }}
          value={guests.adult}
          text="Dospělí"
          stateChangerOnUserInteract={(value: number) => {
            changeValueOnUserInput("adult", value);
          }}
        />
        <GuestsCounter
          addFunction={() => {
            addGuests("minor");
          }}
          removeFunction={() => {
            removeGuests("minor");
          }}
          value={guests.minor}
          text="Děti"
          stateChangerOnUserInteract={(value: number) => {
            changeValueOnUserInput("minor", value);
          }}
        />
        <GuestsCounter
          addFunction={() => {
            addGuests("ztp");
          }}
          removeFunction={() => {
            removeGuests("ztp");
          }}
          value={guests.ztp}
          text="ZTP"
          stateChangerOnUserInteract={(value: number) => {
            changeValueOnUserInput("ztp", value);
          }}
        />
        <GuestsCounter
          addFunction={() => {
            addGuests("pets");
          }}
          removeFunction={() => {
            removeGuests("pets");
          }}
          value={guests.pets}
          text="Mazlíčci"
          stateChangerOnUserInteract={(value: number) => {
            changeValueOnUserInput("pets", value);
          }}
        />
      </div>
    </div>
  );
}

export function GuestsCounter(props: CounterType & { text: string }) {
  return (
    <div className="grid grid-cols-2 items-center border-b border-borderLight">
      <p className="font-semibold select-none">{props.text}</p>
      <Counter
        addFunction={props.addFunction}
        removeFunction={props.removeFunction}
        value={props.value}
        stateChangerOnUserInteract={props.stateChangerOnUserInteract}
      />
    </div>
  );
}

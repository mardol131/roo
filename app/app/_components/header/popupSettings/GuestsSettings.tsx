"use client";

import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import {
  GuestType,
  guestTypeArray,
  headerFilterSlice,
} from "@/app/_redux/slices/filtersSlice/headerFilterSlice";

import { getLocalization } from "@/app/_localization/getLocalization";
import { Counter, CounterType } from "../../filters/Counter";

const m = getLocalization("cs", "header.guest_counter");

type Props = {};

export default function GuestsSettings({}: Props) {
  const { guests } = useAppSelector((state) => state.headerFilter);
  const dispatch = useAppDispatch();
  function nullHeaderSettings() {
    dispatch(headerFilterSlice.actions.changeSettings(null));
  }

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
        {guestTypeArray.map((type: GuestType) => {
          return (
            <GuestsCounter
              key={type}
              addFunction={() => {
                addGuests(type);
              }}
              removeFunction={() => {
                removeGuests(type);
              }}
              value={guests[type]}
              text={m(type)}
              stateChangerOnUserInteract={(value: number) => {
                changeValueOnUserInput(type, value);
              }}
            />
          );
        })}
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

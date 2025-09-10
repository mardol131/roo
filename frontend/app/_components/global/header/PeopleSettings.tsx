"use client";

import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { initialFilterSlice } from "@/app/_redux/slices/initialFilterSlice";

type Props = {};

export default function PeopleSettings({}: Props) {
  const { peopleCount } = useAppSelector((state) => state.initialFilter);
  const dispatch = useAppDispatch();

  function addPeople() {
    dispatch(initialFilterSlice.actions.increment());
  }

  function removePeople() {
    dispatch(initialFilterSlice.actions.decrement());
  }

  return (
    <div className="grid grid-cols-3 items-center justify-items-center gap-2 bg-white p-3 w-full">
      <FaMinus onClick={removePeople} />
      <p className="rounded-full">{peopleCount}</p>
      <FaPlus onClick={addPeople} />
    </div>
  );
}

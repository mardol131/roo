import React from "react";
import HeaderSettingsWrapper from "../../wrappers/HeaderSettingsWrapper";
import { FaMapMarked } from "react-icons/fa";

type Props = {};

export default function PlaceSettings({}: Props) {
  return (
    <HeaderSettingsWrapper>
      <div className="px-10 bg-white gap-10 shadow-xl border border-borderLight rounded-full grid grid-cols-2 p-5 items-center w-full max-w-lowerHeader justify-center">
        <div className="w-full flex items-center">
          <FaMapMarked className="text-pink text-3xl" />
          <select
            name="pets"
            id="pet-select"
            className="p-5 font-semibold text-textPlaceholder w-full"
          >
            <option value="">Vyberte kraj</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <select
          name="pets"
          id="pet-select"
          className="p-5 font-semibold text-textPlaceholder border-gray-300 border-b-3"
        >
          <option value="">Vyberte okres</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    </HeaderSettingsWrapper>
  );
}

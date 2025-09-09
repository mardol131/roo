import React from "react";

type Props = {};

export default function PlaceSettings({}: Props) {
  return (
    <div className="  px-10 gap-10 border-gray-200 rounded-full grid grid-cols-2 p-5 items-center w-full max-w-lowerHeader justify-center">
      <select
        name="pets"
        id="pet-select"
        className="p-5 font-semibold text-placeholderText border-gray-300 border-b-3"
      >
        <option value="">Vyberte kraj</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <select
        name="pets"
        id="pet-select"
        className="p-5 font-semibold text-placeholderText border-gray-300 border-b-3"
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
  );
}

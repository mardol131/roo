import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="border bg-white border-borderLight rounded-medium p-5 shadow-md flex flex-col gap-8">
        <h3 className="font-semibold">Osobní údaje</h3>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <p className="font-semibold">Jméno</p>
            <input
              className="p-3 border font-semibold text-textPlaceholder border-borderLight rounded-small"
              value={"email@gmail.com"}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Příjmení</p>
            <input
              className="p-3 border font-semibold text-textPlaceholder border-borderLight rounded-small"
              value={"email@gmail.com"}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Email</p>
            <input
              className="p-3 border font-semibold text-textPlaceholder border-borderLight rounded-small"
              value={"email@gmail.com"}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Telefon</p>
            <input
              className="p-3 border font-semibold text-textPlaceholder border-borderLight rounded-small"
              value={"email@gmail.com"}
            />
          </div>
        </div>
        <button className="p-3 bg-linear-60 from-pink to-violet font-semibold text-white rounded-medium self-end">
          Uložit
        </button>
      </div>
      <div className="border bg-white border-borderLight rounded-medium p-5 shadow-md flex gap-8 col-start-1 justify-between items-center">
        <h4 className="font-semibold">Resetovat heslo</h4>
        <button className="p-3 bg-linear-60 from-pink to-violet font-semibold text-white rounded-medium ">
          Odeslat kód na reset hesla
        </button>
      </div>
      <div className="border bg-white border-borderLight rounded-medium p-5 shadow-md flex gap-8 col-start-1 justify-between items-center">
        <h4 className="font-semibold">Zrušit účet</h4>
        <button className="p-3 bg-rose-500 font-semibold text-white rounded-medium ">
          Zrušit účet
        </button>
      </div>
    </div>
  );
}

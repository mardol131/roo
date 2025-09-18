import React from "react";
import AdminCheckbox from "../../_components/inputs/AdminCheckbox";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="p-10 w-[800px]">
      <div className="bg-white border border-borderLight rounded-small p-5 flex flex-col gap-5">
        <h4 className="font-semibold">Mlýn davídkov</h4>
        <div className="p-2 rounded-small">
          <h5 className="font-semibold text-pink pb-4">Základní informace</h5>
          <div className="grid grid-cols-[1fr_2fr] gap-y-1">
            <p className="text-sm">Jméno místa</p>
            <AdminTextInput placeholder="Mlýn Davídkok" />
            <p className="text-sm">Adresa</p>
            <div className="grid grid-cols-2 gap-1">
              <AdminTextInput className="col-span-2" placeholder="Adresa 1" />
              <AdminTextInput className="col-span-2" placeholder="Adresa 2" />
              <AdminTextInput />
              <AdminTextInput />
            </div>
            <p className="text-sm">Krátký popis</p>
            <AdminTextInput />
            <p className="text-sm">Jméno místa</p>
            <AdminTextarea />
            <p className="text-sm">Typ místa</p>
            <div className="border border-borderLight rounded-small p-2 grid grid-cols-4 gap-2">
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
            </div>
            <p className="text-sm">Typ místa</p>
            <div className="border border-borderLight rounded-small p-2 grid grid-cols-4 gap-2">
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
              <AdminCheckbox />
            </div>
            <p className="text-sm">Jméno místa</p>
            <AdminTextInput placeholder="Mlýn Davídkok" />{" "}
            <p className="text-sm">Jméno místa</p>
            <AdminTextInput placeholder="Mlýn Davídkok" />{" "}
            <p className="text-sm">Jméno místa</p>
            <AdminTextInput placeholder="Mlýn Davídkok" />{" "}
            <p className="text-sm">Jméno místa</p>
            <AdminTextInput placeholder="Mlýn Davídkok" />
          </div>
        </div>
      </div>
    </div>
  );
}

type AdminTextInput = {
  className?: string;
  placeholder?: string;
};

export function AdminTextInput(props: AdminTextInput) {
  return (
    <input
      className={`${props.className} border text-sm p-2 rounded-small border-borderLight`}
      placeholder={props.placeholder || "placeholder"}
    />
  );
}

export function AdminTextarea(props: AdminTextInput) {
  return (
    <textarea
      className={`${props.className} border text-sm p-2 rounded-small border-borderLight h-50 resize-none`}
      placeholder={props.placeholder || "placeholder"}
    />
  );
}

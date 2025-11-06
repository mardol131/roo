import React, { ReactNode } from "react";
import Image from "next/image";
import image from "@/app/_images/test.jpg";
import { FaRegImage } from "react-icons/fa6";
import AdminCheckbox from "@/app/(admin)/admin/_components/inputs/AdminCheckbox";
import { AdminTextInput } from "../../_components/inputs/AdminTextInput";
import { AdminTextarea } from "../../_components/inputs/AdminTextarea";

type Props = {};

export default function AdminListingPage({}: Props) {
  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="flex gap-2 justify-end">
        <button className="p-2 bg-sky-500 text-white font-semibold rounded-small">
          Uložit
        </button>
        <button className="p-2 bg-emerald-500 opacity-30 text-white font-semibold rounded-small">
          Aktivovat
        </button>
      </div>
      <div className="grid grid-cols-[2fr_5fr] gap-5">
        <div>d</div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col w-full gap-4">
            <h4 className="font-semibold">Základní informace</h4>
            <div className="grid grid-cols-2 items-start gap-10 gap-y-1">
              <div className="flex flex-col w-full gap-4">
                <div className="grid grid-cols-[1fr_2fr]">
                  <p className="text-sm font-semibold">Jméno místa</p>
                  <AdminTextInput placeholder="Mlýn Davídkok" />
                </div>
                <div className="grid grid-cols-[1fr_2fr]">
                  <p className="text-sm font-semibold">Adresa</p>
                  <div className="grid grid-cols-2 gap-1">
                    <AdminTextInput
                      className="col-span-2"
                      placeholder="Adresa 1"
                    />
                    <AdminTextInput
                      className="col-span-2"
                      placeholder="Adresa 2"
                    />
                    <AdminTextInput />
                    <AdminTextInput />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-4">
                <div className="grid grid-cols-[1fr_2fr]">
                  <p className="text-sm font-semibold">Krátký popis</p>
                  <AdminTextInput placeholder="Mlýn Davídkok" />
                </div>
                <div className="grid grid-cols-[1fr_2fr]">
                  <p className="text-sm font-semibold">Dlouhý popis</p>
                  <AdminTextarea />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <h4 className="font-semibold">Náhledový obrázek</h4>
            <div className="flex gap-10">
              <Image
                src={image}
                width={1000}
                height={1000}
                alt="img"
                className="rounded-medium w-50 shadow-lg aspect-square object-cover"
              />
              <div className="flex flex-col w-50 items-center gap-5 justify-center text-center bg-white p-5 rounded-medium border border-borderLight text-textPlaceholder/50 font-semibold">
                <p>Přetáhněte obrázky pro vložení náhledového obrázku</p>
                <FaRegImage className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <h4 className="font-semibold">Galerie</h4>
            <div className="flex flex-col gap-10 items-start">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-3">
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />{" "}
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-full rounded-medium shadow-lg aspect-square object-cover"
                />
              </div>
              <div className="flex flex-col w-full items-center gap-5 justify-center text-center bg-white p-5 rounded-medium border border-borderLight text-textPlaceholder/50 font-semibold">
                <p>Přetáhněte obrázky pro vložení obrázků do galerie</p>
                <FaRegImage className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4">
            <h4 className="font-semibold">Náhledový obrázek</h4>
            <div className="grid grid-cols-2 items-start gap-10 gap-y-1">
              <div className="flex flex-col w-full gap-4">
                <div className="grid grid-cols-[1fr_2fr]">
                  <p className="text-sm">Typ místa</p>
                  <div className="border bg-white shadow-lg border-borderLight rounded-small p-3 grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2">
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-4">
                <div className="grid grid-cols-[1fr_2fr]">
                  <p className="text-sm">Typ místa</p>
                  <div className="border bg-white shadow-lg border-borderLight rounded-small p-3 grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2">
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                    <AdminCheckbox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

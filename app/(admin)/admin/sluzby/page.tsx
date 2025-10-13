import { RooService } from "@/app/admin/sluzby/_components/RooService";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-5 gap-10 p-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] col-span-3 gap-5">
        <RooService name="Rozvoj sociálních sítí" />
        <RooService name="Fotograf" />
        <RooService name="Vylepšení textů" />
        <RooService name="Atmosféra podniku" />
        <RooService name="Finance a účetnictví" />
        <RooService name="Provoz" />
        <RooService name="Plánování akcí" />
        <RooService name="Pomoc s marketingem" />
        <RooService name="Pomoc s marketingem" />
      </div>
      <div className="h-full bg-white border border-borderLight rounded-medium shadow-lg w-full col-span-2 p-5">
        <h4 className="font-semibold">Popis služby</h4>
      </div>
    </div>
  );
}

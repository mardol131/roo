import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  redirect("/stranky/co-je-roo");
}

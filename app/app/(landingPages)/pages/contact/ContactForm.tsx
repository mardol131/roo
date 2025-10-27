"use client";

import React, { FormEvent } from "react";
import {
  FormCheckboxInput,
  FormTextareaInput,
  FormTextInput,
} from "../../_components/formSection/FormSection";
import Button from "@/app/_global/atoms/Button";

type Props = {};

export default function ContactForm({}: Props) {
  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(e);
      }}
      className="p-10 max-lg:p-3 shadow-xl rounded-xl border bg-white border-borderLight grid max-lg:flex max-lg:flex-col grid-cols-2 gap-5"
    >
      <FormTextInput
        label="Jméno"
        placeholder="Jan"
        type="text"
        blockType="formtextinput"
        name="name"
        required="true"
      />
      <FormTextInput
        label="Příjmení"
        placeholder="Novák"
        type="text"
        blockType="formtextinput"
        name="surname"
        required="true"
      />
      <FormTextInput
        label="Společnost"
        placeholder="Skvělá společnost s.r.o."
        type="text"
        blockType="formtextinput"
        name="company"
        spanTwo="true"
        required="true"
      />
      <FormTextInput
        label="Telefon"
        placeholder="+420 777 777 777"
        type="text"
        blockType="formtextinput"
        name="phone"
        required="true"
      />
      <FormTextInput
        label="Email"
        placeholder="ahoj@skvelaspolecnost.cz"
        type="email"
        blockType="formtextinput"
        name="email"
        required="true"
      />
      <FormTextareaInput
        label="Zpráva"
        placeholder="Sem napiš, co máš na srdci"
        blockType="formtextinput"
        name="message"
        spanTwo="true"
        required="true"
      />
      <FormCheckboxInput
        label={[
          {
            blockType: "TextBlock",
            text: "Souhlasím se zpracování osobních údajů společností The Roosters s.r.o.",
            level: "label6",
            color: "black",
          },
        ]}
        blockType="formcheckboxinput"
        name="gdpr"
        value="gdpr"
        spanTwo="true"
      />
      <div className="flex items-center justify-center col-span-2">
        <Button
          text="Přidej se k nám"
          size="xl"
          rounding="full"
          bgColor="primaryTertiary"
          textColor="white"
          type="submit"
        />
      </div>
    </form>
  );
}

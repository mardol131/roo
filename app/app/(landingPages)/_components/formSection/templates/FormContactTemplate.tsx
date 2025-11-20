import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import { FormTextareaInput } from "@/app/_components/molecules/inputs/FormTextareaInput";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import React from "react";

type Props = {};

export default function FormContactTemplate({}: Props) {
  return (
    <>
      <FormTextInput
        label="Jméno"
        placeholder="Jan"
        type="text"
        blockType="formtextinput"
        name="firstName"
        required={true}
      />
      <FormTextInput
        label="Příjmení"
        placeholder="Novák"
        type="text"
        blockType="formtextinput"
        name="lastName"
        required={true}
      />
      <FormTextInput
        label="Společnost"
        placeholder="Skvělá společnost s.r.o."
        type="text"
        blockType="formtextinput"
        name="company"
        spanTwo={true}
      />
      <FormTextInput
        label="Telefon"
        placeholder="777 777 777"
        type="phone"
        blockType="formtextinput"
        name="phone"
      />
      <FormTextInput
        label="Email"
        placeholder="ahoj@skvelaspolecnost.cz"
        type="email"
        blockType="formtextinput"
        name="email"
        required={true}
      />
      <FormTextareaInput
        label="Zpráva"
        placeholder="Sem napiš, co máš na srdci"
        blockType="formtextarea"
        name="message"
        spanTwo={true}
        required={true}
      />
      <FormCheckboxInput
        label={{
          blockType: "TextBlock",
          text: "Souhlasím se zpracování osobních údajů společností The Roosters s.r.o.",
          tag: "p",
          color: "black",
        }}
        blockType="formcheckboxinput"
        name="gdpr"
        value="true"
        spanTwo={true}
        required={true}
      />
    </>
  );
}

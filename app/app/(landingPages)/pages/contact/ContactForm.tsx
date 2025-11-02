"use client";

import React, { FormEvent, useRef, useState } from "react";
import {
  FormCheckboxInput,
  FormTextareaInput,
  FormTextInput,
} from "../../_components/formSection/FormSection";
import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";
import axios from "axios";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";

type Props = {
  webhook: string;
};

export default function ContactForm(props: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    setIsSuccess(false);
    setIsError(false);

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await axios.post(
        props.webhook,
        formDataToObject(formData)
      );

      if (response.status === 200) {
        setIsSuccess(true);
        formRef.current?.reset();
      }
    } catch {
      setIsError(true);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(e);
      }}
      className="p-10 max-lg:p-3 max-lg:pb-10 shadow-xl rounded-xl border bg-white border-borderLight grid max-lg:flex max-lg:flex-col grid-cols-2 gap-5"
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
      />
      <FormTextInput
        label="Telefon"
        placeholder="+420 777 777 777"
        type="text"
        blockType="formtextinput"
        name="phone"
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
        blockType="formtextarea"
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
      <div className="col-span-2 flex flex-col justify-center items-center gap-4">
        <Button
          text="Přidej se k nám"
          size="xl"
          rounding="full"
          bgColor="primaryTertiary"
          textColor="white"
          type="submit"
          disabled={isSuccess}
        />
        {isSuccess && (
          <Text
            text="Děkujeme!"
            level="paragraph3"
            fontWeight="lg"
            color="success"
          />
        )}
        {isError && (
          <Text
            text="Něco se nepovedlo, zkuste to prosím později."
            level="paragraph3"
            fontWeight="lg"
            color="danger"
          />
        )}
      </div>
    </form>
  );
}

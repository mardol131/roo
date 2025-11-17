"use client";

import { FormEvent, useRef, useState } from "react";

import { apis } from "@/app/_api/_apis";
import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";
import Loader from "@/app/_components/molecules/Loader";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import { FormCheckboxInput } from "../../../_components/molecules/inputs/FormCheckboxInput";
import { FormTextInput } from "../../../_components/molecules/inputs/FormTextInput";
import { FormTextareaInput } from "../../../_components/molecules/inputs/FormTextareaInput";

type Props = {
  webhook: string;
};

export default function ContactForm(props: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  async function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    setIsSuccess(false);
    setIsError(false);
    setIsLoading(true);
    e.preventDefault();

    const formData = formDataToObject(new FormData(e.currentTarget));
    const response = await apis.emailing.formTemplateSubmit({
      email: formData.email,
      segment: "RooContact",
      ...formData,
    });

    if (response.success) {
      setIsSuccess(true);
      formRef.current?.reset();
    } else {
      setIsError(true);
    }
    setIsLoading(false);
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
      <div className="col-span-2 flex flex-col text-center justify-center items-center gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            text="Přidej se k nám"
            size="xl"
            rounding="full"
            bgColor="primaryTertiary"
            textColor="white"
            type="submit"
            disabled={isSuccess}
          />
        )}
        {isSuccess && (
          <Text
            text="Děkujeme, vaší odpovědi se budeme co nejdříve věnovat!"
            tag="p"
            fontWeight="semibold"
            color="success"
          />
        )}
        {isError && (
          <Text
            text="Něco se nepovedlo, zkuste to prosím později."
            tag="p"
            fontWeight="semibold"
            color="danger"
          />
        )}
      </div>
    </form>
  );
}

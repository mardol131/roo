import React from "react";
import { FormTextInput } from "../_components/FormTextInput";
import { FormMultipleCheckboxInput } from "../_components/FormMultipleCheckboxInput";
import { FormSelectInput } from "../_components/FormSelectInput";
import { FormCheckboxInput } from "../_components/FormCheckboxInput";

type Props = {};

export default function FormWaitlistTemplate({}: Props) {
  return (
    <>
      <FormTextInput
        blockType="formtextinput"
        label="Jméno"
        name="firstName"
        placeholder="Jan"
        spanTwo="false"
        type="text"
        required="true"
      />
      <FormTextInput
        blockType="formtextinput"
        label="Příjmení"
        name="lastName"
        placeholder="Novák"
        spanTwo="false"
        type="text"
        required="true"
      />
      <FormTextInput
        blockType="formtextinput"
        label="Společnost"
        name="company"
        placeholder="Skvělá společnost a.s."
        spanTwo="true"
        type="text"
        required="true"
      />
      <FormTextInput
        blockType="formtextinput"
        label="Web nebo sociální sítě"
        name="web"
        placeholder="skvelyweb.cz"
        spanTwo="true"
        type="text"
        required="false"
      />
      <FormTextInput
        blockType="formtextinput"
        label="Telefon"
        name="Phone"
        placeholder="777 777 777"
        spanTwo="false"
        type="phone"
        required="true"
      />
      <FormTextInput
        blockType="formtextinput"
        label="Email"
        name="email"
        placeholder="skvelyemail@email.cz"
        spanTwo="false"
        type="email"
        required="true"
      />
      <FormMultipleCheckboxInput
        blockType="formmultiplecheckboxinput"
        label={[
          {
            text: "Co jsi za službu?",
            level: "label6",
            color: "primary",
            fontWeight: "lg",
          },
        ]}
        required="true"
        checkboxes={[
          {
            blockType: "formcheckboxinput",
            value: "place",
            label: [
              {
                text: "Místo",
                color: "black",
                level: "label7",
                fontWeight: "lg",
              },
            ],
          },
          {
            blockType: "formcheckboxinput",
            value: "gastro",
            label: [
              {
                text: "Gastro",
                color: "black",
                level: "label7",
                fontWeight: "lg",
              },
            ],
          },
          {
            blockType: "formcheckboxinput",
            value: "entertainment",
            label: [
              {
                text: "Zábava",
                color: "black",
                level: "label7",
                fontWeight: "lg",
              },
            ],
          },
        ]}
        value="service"
      />
      <FormMultipleCheckboxInput
        blockType="formmultiplecheckboxinput"
        label={[
          {
            text: "Co jsi za organizátora?",
            level: "label6",
            color: "primary",
            fontWeight: "lg",
          },
        ]}
        required="true"
        checkboxes={[
          {
            blockType: "formcheckboxinput",
            value: "person",
            label: [
              {
                text: "Soukromá osoba",
                color: "black",
                level: "label7",
                fontWeight: "lg",
              },
            ],
          },
          {
            blockType: "formcheckboxinput",
            value: "company",
            label: [
              {
                text: "Společnost",
                color: "black",
                level: "label7",
                fontWeight: "lg",
              },
            ],
          },
          {
            blockType: "formcheckboxinput",
            value: "event-agency",
            label: [
              {
                text: "Eventová agentura",
                color: "black",
                level: "label7",
                fontWeight: "lg",
              },
            ],
          },
        ]}
        value="organizer"
      />
      <FormSelectInput
        blockType="formselectinput"
        label="Jak jste se o nás dozvěděli"
        placeholder="--vyberte možnost--"
        value="reference"
        spanTwo="true"
        options={[
          { text: "Vyhledávání", value: "search" },
          { text: "Sociální sítě", value: "social" },
          { text: "Online reklama", value: "online-ad" },
          { text: "Doporučení kamaráda", value: "referral" },
          { text: "Doporučení klientem", value: "client-referral" },
          { text: "Prodejce", value: "seller" },
        ]}
        required="true"
      />
      <FormCheckboxInput
        blockType="formcheckboxinput"
        value="gdpr"
        spanTwo="true"
        required="true"
        label={[
          {
            text: "Souhlasím se zpracování osobních údajů společností The Roosters s.r.o.",
            color: "black",
            level: "label7",
          },
        ]}
      />
      <FormCheckboxInput
        blockType="formcheckboxinput"
        value="marketing"
        spanTwo="true"
        required="false"
        label={[
          {
            text: "Chci dostávat newsletter",
            color: "black",
            level: "label7",
          },
        ]}
      />
    </>
  );
}

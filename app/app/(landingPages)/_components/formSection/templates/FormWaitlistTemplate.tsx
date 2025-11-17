import { FormCheckboxInput } from "../../../../_components/molecules/inputs/FormCheckboxInput";
import { FormMultipleCheckboxInput } from "../../../../_components/molecules/inputs/FormMultipleCheckboxInput";
import { FormSelectInput } from "../../../../_components/molecules/inputs/FormSelectInput";
import { FormTextInput } from "../../../../_components/molecules/inputs/FormTextInput";

type Props = {};

export default function FormWaitlistTemplate({}: Props) {
  return (
    <>
      <FormTextInput
        blockType="formtextinput"
        label="Jméno"
        name="firstName"
        placeholder="Jan"
        spanTwo={false}
        type="text"
        required={true}
      />
      <FormTextInput
        blockType="formtextinput"
        label="Příjmení"
        name="lastName"
        placeholder="Novák"
        spanTwo={false}
        type="text"
        required={true}
      />
      <FormTextInput
        blockType="formtextinput"
        label="Společnost"
        name="company"
        placeholder="Skvělá společnost a.s."
        spanTwo={true}
        type="text"
        required={true}
      />
      <FormTextInput
        blockType="formtextinput"
        label="Web nebo sociální sítě"
        name="web"
        placeholder="skvelyweb.cz"
        spanTwo={true}
        type="text"
        required={true}
      />
      <FormTextInput
        blockType="formtextinput"
        label="Telefon"
        name="phone"
        placeholder="777 777 777"
        spanTwo={false}
        type="phone"
        required={true}
      />
      <FormTextInput
        blockType="formtextinput"
        label="Email"
        name="email"
        placeholder="skvelyemail@email.cz"
        spanTwo={false}
        type="email"
        required={true}
      />
      <FormMultipleCheckboxInput
        blockType="formmultiplecheckboxinput"
        label={[
          {
            text: "Co jsi za službu?",
            tag: "p",
            color: "primary",
            fontWeight: "semibold",
          },
        ]}
        required={true}
        checkboxes={[
          {
            blockType: "formcheckboxinput",
            value: "place",
            label: {
              text: "Místo",
              color: "black",
              tag: "p",
              fontWeight: "semibold",
            },
            id: "place",
          },
          {
            blockType: "formcheckboxinput",
            value: "gastro",
            label: {
              text: "Gastro",
              color: "black",
              tag: "p",
              fontWeight: "semibold",
            },
            id: "gastro",
          },
          {
            blockType: "formcheckboxinput",
            value: "entertainment",
            label: {
              text: "Zábava",
              color: "black",
              tag: "p",
              fontWeight: "semibold",
            },
            id: "entertainment",
          },
        ]}
        value="services"
      />
      <FormMultipleCheckboxInput
        blockType="formmultiplecheckboxinput"
        label={[
          {
            text: "Co jsi za organizátora?",
            tag: "p",
            color: "primary",
            fontWeight: "semibold",
          },
        ]}
        required={true}
        checkboxes={[
          {
            blockType: "formcheckboxinput",
            value: "person",
            label: {
              text: "Soukromá osoba",
              color: "black",
              tag: "p",
              fontWeight: "semibold",
            },
            id: "person",
          },
          {
            blockType: "formcheckboxinput",
            value: "company",
            label: {
              text: "Společnost",
              color: "black",
              tag: "p",
              fontWeight: "semibold",
            },
            id: "company",
          },
          {
            blockType: "formcheckboxinput",
            value: "event-agency",
            label: {
              text: "Eventová agentura",
              color: "black",
              tag: "p",
              fontWeight: "semibold",
            },
            id: "event-agency",
          },
        ]}
        value="companyType"
      />
      <FormSelectInput
        blockType="formselectinput"
        label="Jak jste se o nás dozvěděli"
        placeholder="--vyberte možnost--"
        value="reference"
        spanTwo={true}
        options={[
          { text: "Vyhledávání", value: "search" },
          { text: "Sociální sítě", value: "social" },
          { text: "Online reklama", value: "online-ad" },
          { text: "Doporučení kamaráda", value: "referral" },
          { text: "Doporučení klientem", value: "client-referral" },
          { text: "Prodejce", value: "seller" },
        ]}
        required={true}
      />
      <FormCheckboxInput
        blockType="formcheckboxinput"
        value="true"
        name="gdpr"
        spanTwo={true}
        required={true}
        label={{
          text: "Souhlasím se zpracování osobních údajů společností The Roosters s.r.o.",
          color: "black",
          tag: "p",
        }}
      />
      <FormCheckboxInput
        blockType="formcheckboxinput"
        value="true"
        name="marketing"
        spanTwo={true}
        required={false}
        label={{
          text: "Chci dostávat newsletter",
          color: "black",
          tag: "p",
        }}
      />
    </>
  );
}

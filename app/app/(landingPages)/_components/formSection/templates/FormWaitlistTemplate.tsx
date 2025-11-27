import { FormMultipleSelectInput } from "@/app/_components/molecules/inputs/FormMultipleSelectInput";
import { FormCheckboxInput } from "../../../../_components/molecules/inputs/FormCheckboxInput";
import { FormSelectInput } from "../../../../_components/molecules/inputs/FormSelectInput";
import { FormTextInput } from "../../../../_components/molecules/inputs/FormTextInput";
import { FormMultiSelectInput } from "@/app/_components/molecules/inputs/FormMultiSelectInput";

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
        spanTwo={false}
        type="text"
        required={true}
      />
      <FormTextInput
        blockType="formtextinput"
        label="Web nebo sociální sítě"
        name="web"
        placeholder="skvelyweb.cz"
        spanTwo={false}
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
      <FormMultiSelectInput
        blockType="formmultipleselectinput"
        label="Jsi organizátor? Nabízíš nějakou službu?"
        required={true}
        name="category"
        placeholder="Nabízíte nějakou službu?"
        usage="cms"
        groupDividerTexts={[
          { text: "Typ služby", slugAfter: "place" },
          { text: "Type organizátora", slugAfter: "private" },
        ]}
        options={[
          {
            label: "Místo",
            slug: "place",
            id: "place",
          },
          {
            label: "Gastro",
            slug: "gastro",
            id: "gastro",
          },
          { label: "Zábava", slug: "entertainment", id: "entertainment" },
          {
            label: "Soukromá osoba",
            slug: "private",
            id: "private",
          },
          {
            label: "Společnost",
            slug: "company",
            id: "company",
          },
          {
            label: "Eventová agentura",
            slug: "event-agency",
            id: "event-agency",
          },
        ]}
        disableSearch={true}
        spanTwo={true}
      />
      <FormSelectInput
        blockType="formselectinput"
        label="Jak jste se o nás dozvěděli"
        placeholder="--vyberte možnost--"
        value="reference"
        spanTwo={true}
        options={[
          { label: "Vyhledávání", slug: "search", id: "search" },
          { label: "Sociální sítě", slug: "social", id: "social" },
          { label: "Online reklama", slug: "online-ad", id: "online-ad" },
          { label: "Doporučení kamaráda", slug: "referral", id: "referral" },
          {
            label: "Doporučení klientem",
            slug: "client-referral",
            id: "client-referral",
          },
          { label: "Prodejce", slug: "seller", id: "seller" },
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

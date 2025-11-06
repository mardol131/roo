import React from "react";
import { FormTextInput } from "../_components/FormTextInput";

type Props = {};

export default function FormEmailCollectionTemplate({}: Props) {
  return (
    <>
      <FormTextInput
        blockType="formtextinput"
        label="Tvůj email"
        name="email"
        placeholder="jannovak@email.com"
        spanTwo="true"
        type="email"
        required="true"
      />
    </>
  );
}

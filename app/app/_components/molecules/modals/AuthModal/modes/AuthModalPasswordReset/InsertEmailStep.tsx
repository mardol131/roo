import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { AuthModalModes } from "@/app/_redux/slices/authSlice/authSlice";
import React, { FormEvent } from "react";

type Props = {
  changeModalModeHandler: (mode: AuthModalModes) => void;
  onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
};

export default function InsertEmailStep({
  changeModalModeHandler,
  onSubmitHandler,
}: Props) {
  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full flex flex-col items-center gap-10 p-10"
    >
      <Text
        level="label4"
        text="Zapomenuté heslo"
        color="primary"
        className="font-semibold"
      />
      <div className="w-full flex flex-col gap-2">
        <FormTextInput
          placeholder="email@email.com"
          label="Uživatelský email"
          type="text"
          name="username"
          className=" rounded-md w-full"
          required="true"
        />
      </div>

      <Button
        text="Odeslat ověřovací kód"
        size="xl"
        bgColor="primaryTertiary"
        textColor="white"
        rounding="full"
        type="submit"
      />
      <button
        onClick={() => {
          changeModalModeHandler("login");
        }}
        className="flex gap-2 cursor-pointer"
      >
        <Text
          level="paragraph3"
          color="black"
          text="Zpět"
          className="hover:text-primary"
        />
      </button>
    </form>
  );
}

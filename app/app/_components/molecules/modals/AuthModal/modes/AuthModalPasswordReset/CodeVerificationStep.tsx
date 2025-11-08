"use client";

import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { AuthModalModes } from "@/app/_redux/slices/authSlice/authSlice";
import React, { FormEvent, useCallback, useState } from "react";

type Props = {
  changeModalModeHandler: (mode: AuthModalModes) => void;
  onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
};

export default function CodeVerifiactionStep({
  changeModalModeHandler,
  onSubmitHandler,
}: Props) {
  const [code, setCode] = useState<(undefined | string)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const insertCodeHandler = useCallback(
    (value: string, index: number) => {
      const characters = value.replace(/\D/g, "").split("").slice(0, 4);
      const newCode = [...code];

      if (index === 0 && characters.length === 4) {
        // vložen celý kód najednou
        newCode[0] = characters[0];
        newCode[1] = characters[1];
        newCode[2] = characters[2];
        newCode[3] = characters[3];
        setCode(newCode);
        return;
      }

      // standardní jednopísmenné psaní
      newCode[index] = characters[0] ?? undefined;

      setCode(newCode);
    },
    [code]
  );

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full flex flex-col items-center gap-10 p-10"
    >
      <Text
        level="label4"
        text="Zadejte kód"
        color="primary"
        className="font-semibold"
      />
      <div className="w-full gap-2 grid grid-cols-4">
        <input
          className="text-2xl rounded-md min-h-15 w-full border border-borderLight text-center"
          value={code[0]}
          onChange={(e) => {
            insertCodeHandler(e.target.value, 0);
          }}
          required
        />
        <input
          className="text-2xl rounded-md min-h-15 w-full border border-borderLight text-center"
          value={code[1]}
          onChange={(e) => {
            insertCodeHandler(e.target.value, 1);
          }}
          required
        />
        <input
          className="text-2xl rounded-md min-h-15 w-full border border-borderLight text-center"
          value={code[2]}
          onChange={(e) => {
            insertCodeHandler(e.target.value, 2);
          }}
          required
        />
        <input
          className="text-2xl rounded-md min-h-15 w-full border border-borderLight text-center"
          value={code[3]}
          onChange={(e) => {
            insertCodeHandler(e.target.value, 3);
          }}
          required
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

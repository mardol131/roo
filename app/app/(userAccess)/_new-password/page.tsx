"use client";

import Button from "@/app/_components/atoms/button/Button";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import image from "@/app/_images/place.jpg";
import Image from "next/image";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="max-w-contentWrapper flex flex-col w-full justify-center items-center h-full">
        <form className="max-w-150 w-full flex flex-col items-center gap-6 border-borderLight p-10 rounded-xl">
          <Text
            tag="h2"
            size="headingMd"
            text="Vytvořte nové heslo"
            color="primary"
            fontWeight="semibold"
          />

          <div className="w-full flex flex-col gap-2">
            <FormTextInput
              label="Nové heslo"
              placeholder="****"
              type="password"
              name="password"
              className="border-2 rounded-md border-borderLight w-full"
              required={true}
            />
            <FormTextInput
              label="Nové heslo znovu"
              placeholder="****"
              type="password"
              name="passwordCheck"
              className="border-2 rounded-md border-borderLight w-full"
              required={true}
            />
          </div>

          <Button
            text="Odeslat ověřovací email"
            size="xl"
            bgColor="primarySecondary"
            textColor="white"
            rounding="full"
            type="submit"
          />
        </form>
      </div>
      <div className="border-l border-borderLight relative p-10 grid grid-cols-2 items-start">
        <div className="relative z-10 w-full  m-10 flex flex-col gap-5 p-10 top-0 bg-black/50 rounded-xl backdrop-blur-xs">
          <Text
            tag="h4"
            size="headingSm"
            text="Zapomněli jste heslo? S tím samozřejmě umíme pomoct!"
            color="white"
            fontWeight="semibold"
          />
          <Text
            tag="p"
            text="Na email, se kterým jste se přihlašovali, Vám pošleme zprávu s odkazem pro změnu hesla. Jakmile na odkaz kliknete, budete přesměrování zpět do formuláře pro zadání nového hesla."
            color="white"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 w-full h-full object-cover rounded-xl -translate-x-1/2 -translate-y-1/2 p-10">
          <Image
            src={image.src}
            height={2000}
            width={2000}
            alt="password reset"
            className="w-full h-full object-cover rounded-xl shadow-xl"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

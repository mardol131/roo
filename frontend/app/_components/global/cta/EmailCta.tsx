import React from "react";
import Heading from "../atoms/Heading";
import { colors } from "@/app/_data/colors";
import ButtonWebhook from "../buttons/ButtonWebhook";
import { ButtonDesign } from "../atoms/ButtonDesign";

type Props = {
  heading: string;
  text: string;
  buttonText: string;
  webhookUrl: string;
  buttonDesign: ButtonDesign;
};

export default function EmailCta(props: Props) {
  return (
    <div className="p-20 bg-linear-30 from-orange via-pink to-violet flex items-center justify-center rounded-3xl shadow-xl">
      <div className="bg-white rounded-3xl p-10 flex flex-col items-center w-[60%] shadow-2xl gap-5">
        <Heading text={props.heading} level="h2" color={colors.pink} />
        <p className="text-center font-semibold text-gray-600">{props.text}</p>
        <div className="border border-borderLight rounded-xl p-3 w-full">
          <p className="text-pink font-semibold text-sm">Tvůj email</p>
          <input
            type="email"
            className="w-full placeholder:text-textPlaceholder "
            placeholder="jan.novak@gmail.com"
          />
        </div>
        <ButtonWebhook
          size="big"
          text={props.buttonText}
          design={props.buttonDesign}
          webhookUrl={props.webhookUrl}
        />
      </div>
    </div>
  );
}

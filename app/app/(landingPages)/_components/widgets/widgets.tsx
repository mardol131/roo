"use client";

import { apiPost } from "@/app/_api/general";
import Button, { ButtonProps } from "@/app/_components/atoms/button/Button";
import Text, { TextProps } from "@/app/_components/atoms/text/Text";
import React, { useState } from "react";

export const WidgetsList = {
  InputWidget,
};

export type WidgetType = InputWidgetProps;

export type InputWidgetProps = {
  type: "inputWidget";
  label: string;
  placeholder: string;
  webhook: string;
  button: ButtonProps;
  successText: TextProps;
};

export default function InputWidget(props: InputWidgetProps) {
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState<string | null>();

  async function submitHandler() {
    const response = await apiPost(props.webhook, { input: input });

    setSuccess(true);
  }

  if (success) {
    return <Text {...props.successText} />;
  } else {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className={`bg-white border-2 min-w-[50%] max-md:w-full  border-borderLight p-1 flex max-md:flex-col max-md:gap-5 justify-between items-center md:rounded-full rounded-lg`}
        >
          <div className="flex flex-col max-md:items-center w-full md:pl-8">
            <label className="text-primary font-semibold">{props.label}</label>
            <input
              type="email"
              className="focus:outline-0 max-md:text-center"
              placeholder={props.placeholder}
            ></input>
          </div>
          <Button
            type="submit"
            {...props.button}
            className="text-center justify-self-end"
          />
        </form>
      </>
    );
  }
}

type GenerateWidgetsProps = {
  widgets: WidgetType[];
};

export function GenerateWidgets(props: GenerateWidgetsProps) {
  const widgets = props.widgets.map((widget, i) => {
    switch (widget.type) {
      case "inputWidget":
        return <InputWidget key={i} {...widget} />;
      default:
        return null; // fallback, TypeScript ví, že už by nemělo nastat
    }
  });

  return widgets;
}

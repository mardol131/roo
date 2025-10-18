import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import { TextProps } from "@/app/_global/atoms/Text";
import React from "react";

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
};

export default function InputWidget(props: InputWidgetProps) {
  return (
    <>
      <form
        action={props.webhook}
        className={`bg-white border-2 min-w-[50%]  border-borderLight p-1 flex justify-between items-center rounded-full`}
      >
        <div className="flex flex-col w-full pl-8">
          <label className="text-primary font-semibold">{props.label}</label>
          <input
            type="email"
            className="focus:outline-0"
            placeholder={props.placeholder}
          ></input>
        </div>
        <Button {...props.button} className="text-center justify-self-end" />
      </form>
    </>
  );
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

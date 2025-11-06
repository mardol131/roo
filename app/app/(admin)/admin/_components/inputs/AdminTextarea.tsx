import { AdminTextInput } from "./AdminTextInput";

export function AdminTextarea(props: AdminTextInput) {
  return (
    <textarea
      className={`${props.className} border text-sm p-2 rounded-small border-borderLight h-50 resize-none shadow-sm bg-white`}
      placeholder={props.placeholder || "placeholder"}
    />
  );
}

export type AdminTextInput = {
  className?: string;
  placeholder?: string;
};

export function AdminTextInput(props: AdminTextInput) {
  return (
    <input
      className={`${props.className} border text-sm p-2 rounded-small border-borderLight bg-white shadow-sm`}
      placeholder={props.placeholder || "placeholder"}
    />
  );
}

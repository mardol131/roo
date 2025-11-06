export type FormTextareaInputProps = {
  blockType: "formtextarea";
  label: string;
  name: string;
  placeholder: string;
  spanTwo?: "true" | "false";
  required?: "true" | "false";
};

export function FormTextareaInput(props: FormTextareaInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 h-50 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        required={props.required === "true" || false}
        className="h-full resize-none"
      />
    </div>
  );
}

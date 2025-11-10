export type FormTextareaInputProps = {
  blockType: "formtextarea";
  label: string;
  name: string;
  placeholder: string;
  spanTwo?: boolean;
  required?: boolean;
};

export function FormTextareaInput(props: FormTextareaInputProps) {
  return (
    <div
      className={`${
        props.spanTwo && "col-span-2"
      } border-2 min-h-30 border-borderLight p-2 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        required={props.required || false}
        className="h-full resize-y"
      />
    </div>
  );
}

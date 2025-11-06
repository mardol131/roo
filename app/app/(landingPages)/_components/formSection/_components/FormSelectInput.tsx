type SelectOptionType = {
  text: string;
  value: string;
};

export type FormSelectInputProps = {
  blockType: "formselectinput";
  label: string;
  value: string;
  placeholder: string;
  spanTwo?: "true" | "false";
  options: SelectOptionType[];
  required?: "true" | "false";
};

export function FormSelectInput(props: FormSelectInputProps) {
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>

      <select
        required={props.required === "true" || false}
        name={props.value}
        id={props.value}
      >
        <option value="" className="text-textPlaceholder">
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return (
            <option key={option.text} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

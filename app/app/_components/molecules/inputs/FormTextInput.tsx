export type FormTextInputProps = {
  blockType?: "formtextinput";
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "phone";
  placeholder: string;
  spanTwo?: "true" | "false";
  required?: "true" | "false" | boolean;
  className?: string;
  value?: any;
  outerBorder?: boolean;
};

export function FormTextInput(props: FormTextInputProps) {
  const {
    blockType,
    label,
    name,
    type,
    placeholder,
    spanTwo,
    required,
    className,
    value,
    outerBorder = true,
  } = props;
  const inputType = props.type || "text";

  const classes = `${className} ${spanTwo === "true" && "col-span-2"} ${outerBorder && "border-2 border-borderLight"}`;

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (type === "phone") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 9);
    }
  }
  return (
    <div className={`${classes}  w-full p-3 flex flex-col rounded-medium`}>
      <label className="text-primary font-semibold">{label}</label>
      <div className="flex items-center justify-start gap-2">
        {type === "phone" && (
          <>
            <select
              name="countryCode"
              id="countryCode"
              className="font-semibold"
            >
              <option value="+420">+420</option>
              <option value="+421">+421</option>
            </select>
          </>
        )}
        <input
          name={name}
          type={inputType}
          placeholder={placeholder}
          required={required === "true" || required === true || false}
          defaultValue=""
          onChange={changeHandler}
          className="w-full"
          value={value}
          minLength={type === "password" ? 8 : 0}
        ></input>
      </div>
    </div>
  );
}

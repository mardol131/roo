export type FormTextInputProps = {
  blockType: "formtextinput";
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "phone";
  placeholder: string;
  spanTwo?: "true" | "false";
  required?: "true" | "false";
};

export function FormTextInput(props: FormTextInputProps) {
  const type = props.type || "text";

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (props.type === "phone") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 9);
    }
  }
  return (
    <div
      className={`${
        props.spanTwo === "true" && "col-span-2"
      } border-2 border-borderLight p-3 flex flex-col rounded-medium`}
    >
      <label className="text-primary font-semibold">{props.label}</label>
      <div className="flex items-center justify-start gap-2">
        {props.type === "phone" && (
          <>
            <select name="code" id="code" className="font-semibold">
              <option value="+420">+420</option>
              <option value="+421">+421</option>
            </select>
          </>
        )}
        <input
          name={props.name}
          type={type}
          placeholder={props.placeholder}
          required={props.required === "true" || false}
          defaultValue=""
          onChange={changeHandler}
        ></input>
      </div>
    </div>
  );
}

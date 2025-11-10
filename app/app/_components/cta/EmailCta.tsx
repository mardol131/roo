import Button, { ButtonProps } from "../atoms/Button";
import Heading from "../atoms/Text";

type Props = {
  heading: string;
  text: string;
  buttonText: string;
  webhookUrl: string;
  button: ButtonProps;
};

export default function EmailCta(props: Props) {
  return (
    <div className="p-20 bg-linear-30 from-secondary via-primary to-tertiary flex items-center justify-center rounded-3xl shadow-xl">
      <div className="bg-white rounded-3xl p-10 flex flex-col items-center w-[60%] shadow-2xl gap-5">
        <Heading text={props.heading} tag="h2" color="primary" />
        <p className="text-center font-semibold text-gray-600">{props.text}</p>
        <div className="border border-borderLight rounded-xl p-3 w-full">
          <p className="text-primary font-semibold text-sm">Tvůj email</p>
          <input
            type="email"
            className="w-full placeholder:text-textPlaceholder "
            placeholder="jan.novak@gmail.com"
          />
        </div>
        <Button {...props.button} />
      </div>
    </div>
  );
}

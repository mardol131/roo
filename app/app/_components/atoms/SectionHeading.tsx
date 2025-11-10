import { HeadingLevel } from "@/app/_types/heading";

type Props = {
  text: string;
  level: HeadingLevel;
};

export default function SectionHeading(props: Props) {
  const className = "text-4xl";

  switch (props.level) {
    case "h1":
      return <h1 className={className}>{props.text}</h1>;
    case "h2":
      return <h2 className={className}>{props.text}</h2>;
    case "h3":
      return <h3 className={className}>{props.text}</h3>;
    case "h4":
      return <h4 className={className}>{props.text}</h4>;
    case "h5":
      return <h5 className={className}>{props.text}</h5>;
  }
}

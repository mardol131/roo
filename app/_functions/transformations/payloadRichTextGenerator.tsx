import { textColor } from "@/app/_design/colors";
import { PayloadTextSectionType } from "@/app/_design/text";

type PayloadRichTextGeneratorProps = {
  text: PayloadTextSectionType;
  className?: string;
  gap?: string;
};

export function PayloadRichTextGenerator(props: PayloadRichTextGeneratorProps) {
  const text = props.text;
  const componentsArray = props.text.richText.root.children.map(
    (children, i) => {
      let content: string = "";
      children.children.map((textContent) => {
        content = content + textContent.text;
      });
      const type = children.tag ? children.tag : "paragraph";

      const key = text.richTextColors?.[type];

      const contentColor = key ? textColor[key] : undefined;

      const contentSize = text.richTextSizes && text.richTextSizes[type];

      const contentWeight = text.richTextWeights && text.richTextWeights[type];

      switch (type) {
        case "h1":
          return (
            <h1
              className={`text-7xl ${contentSize} ${contentWeight} ${contentColor}`}
            >
              {content}
            </h1>
          );
        case "h2":
          return (
            <h2
              className={`text-5xl ${contentSize} ${contentWeight} ${contentColor}`}
              key={children.children[0].text + i}
            >
              {content}
            </h2>
          );
        case "h3":
          return (
            <h3
              className={`text-3xl ${contentSize} ${contentWeight} ${contentColor}`}
              key={children.children[0].text + i}
            >
              {content}
            </h3>
          );
        case "h4":
          return (
            <h4
              className={`text-xl ${contentSize} ${contentWeight} ${contentColor}`}
              key={children.children[0].text + i}
            >
              {content}
            </h4>
          );
        case "h5":
          return (
            <h5
              className={`text-lg ${contentSize} ${contentWeight} ${contentColor}`}
              key={children.children[0].text + i}
            >
              {content}
            </h5>
          );
        case "h6":
          return (
            <h6
              className={`text-lg ${contentSize} ${contentWeight} ${contentColor}`}
              key={children.children[0].text + i}
            >
              {content}
            </h6>
          );
        case "paragraph":
          console.log(contentWeight);
          return (
            <p
              className={`${contentSize} ${contentWeight} ${contentColor}`}
              key={children.children[0].text + i}
            >
              {content}
            </p>
          );
        default:
          console.log(contentWeight);

          return (
            <p
              className={`${contentSize} ${contentWeight} ${contentColor}`}
              key={children.children[0].text + i}
            >
              {content}
            </p>
          );
      }
    }
  );

  return (
    <div className={`${props.className} flex flex-col ${props.gap || "gap-5"}`}>
      {componentsArray}
    </div>
  );
}

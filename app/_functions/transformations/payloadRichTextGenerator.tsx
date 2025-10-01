import { textColor } from "@/app/_design/colors";
import { PayloadTextSectionType } from "@/app/_design/text";

type PayloadRichTextGeneratorProps = {
  text: PayloadTextSectionType;
  className?: string;
  gap?: string;
};

export function PayloadRichTextGenerator(props: PayloadRichTextGeneratorProps) {
  const text = props.text;
  console.log(props.text.richTextWeights);
  const componentsArray = props.text.richText.root.children.map(
    (children, i) => {
      switch (children.tag) {
        case "h1":
          return (
            <h1
              style={{
                fontSize: text.richTextSizes?.h1,
                fontWeight: text.richTextWeights?.h1,
              }}
              className={`text-7xl ${
                text.richTextColors?.h1 && textColor[text.richTextColors?.h1]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
            </h1>
          );
        case "h2":
          return (
            <h2
              style={{
                fontSize: text.richTextSizes?.h2,
                fontWeight: text.richTextWeights?.h2,
              }}
              className={`text-5xl ${
                text.richTextColors?.h2 && textColor[text.richTextColors?.h2]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
            </h2>
          );
        case "h3":
          return (
            <h3
              style={{
                fontSize: text.richTextSizes?.h3,
                fontWeight: text.richTextWeights?.h3,
              }}
              className={`text-3xl ${
                text.richTextColors?.h3 && textColor[text.richTextColors?.h3]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
            </h3>
          );
        case "h4":
          return (
            <h4
              style={{
                fontSize: text.richTextSizes?.h4,
                fontWeight: text.richTextWeights?.h4,
              }}
              className={`text-xl ${
                text.richTextColors?.h4 && textColor[text.richTextColors?.h4]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
            </h4>
          );
        case "h5":
          return (
            <h5
              style={{
                fontSize: text.richTextSizes?.h5,
                fontWeight: text.richTextWeights?.h5,
              }}
              className={`text-lg ${
                text.richTextColors?.h5 && textColor[text.richTextColors?.h5]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
            </h5>
          );
        case "h6":
          return (
            <h6
              style={{
                fontSize: text.richTextSizes?.h6,
                fontWeight: text.richTextWeights?.h6,
              }}
              className={`text-lg ${
                text.richTextColors?.h6 && textColor[text.richTextColors?.h6]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
            </h6>
          );
        case "paragraph":
          return (
            <p
              style={{
                fontSize: text.richTextSizes?.paragraph,
                fontWeight: text.richTextWeights?.paragraph,
              }}
              className={`text-base ${
                text.richTextColors?.paragraph &&
                textColor[text.richTextColors?.paragraph]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
            </p>
          );
        default:
          return (
            <p
              style={{
                fontSize: text.richTextSizes?.paragraph,
                fontWeight: text.richTextWeights?.paragraph,
              }}
              className={`text-base ${
                text.richTextColors?.paragraph &&
                textColor[text.richTextColors?.paragraph]
              }`}
              key={children.children[0].text + i}
            >
              {children.children[0].text}
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

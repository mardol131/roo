import {
  ImageBlockProps,
  TextBlockProps,
} from "@/app/(landingPages)/_components/textSection/TextSection";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { textColor, TextColorType } from "@roo/shared/src/design/colors";
import {
  fontType,
  FontType,
  fontWeight,
  FontWeightType,
  TextLevelType,
} from "@roo/shared/src/design/texts";

export type TextProps = {
  level: TextLevelType;
  color?: TextColorType;
  text: string;
  className?: string;
  fontWeight?: FontWeightType;
  font?: FontType;
};

export default function Text(props: TextProps) {
  const color = props.color ? textColor[props.color] : textColor.black;

  let font: string | undefined = props.level.startsWith("h")
    ? "font-montserrat"
    : "font-nunito";

  //   const align = props.textAlign && textAlign[props.textAlign];
  const weight = props.fontWeight && fontWeight[props.fontWeight];
  font = props.font && fontType[props.font];
  const classes = `${props.className} ${color} ${weight} ${font}`;

  const htmlSafeText = sanitizeHtml(props.text, {
    allowedTags: ["strong", "span", "a", "br"],
    allowedAttributes: { a: ["href", "target"], span: ["class"] },
  });

  switch (props.level) {
    case "h1":
      return (
        <h1
          className={`${classes} md:text-7xl text-[2.5rem]`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></h1>
      );
    case "h2":
      return (
        <h2
          className={`${classes} md:text-5xl text-4xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></h2>
      );
    case "h3":
      return (
        <h3
          className={`${classes} md:text-4xl text-3xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></h3>
      );
    case "h4":
      return (
        <h4
          className={`${classes} md:text-3xl text-2xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></h4>
      );
    case "h5":
      return (
        <h5
          className={`${classes} text-xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></h5>
      );

    case "label1":
      return (
        <p
          className={`${classes} md:text-7xl text-5xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "label2":
      return (
        <p
          className={`${classes} md:text-5xl text-4xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "label3":
      return (
        <p
          className={`${classes} md:text-4xl text-3xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "label4":
      return (
        <p
          className={`${classes} md:text-3xl text-2xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "label5":
      return (
        <p
          className={`${classes} md:text-2xl text-xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "label6":
      return (
        <p
          className={`${classes} text-xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "label7":
      return (
        <p
          className={`${classes} text-base`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "label8":
      return (
        <p
          className={`${classes} text-sm`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "paragraph1":
      return (
        <p
          className={`${classes} md:text-2xl text-xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "paragraph2":
      return (
        <p
          className={`${classes} text-xl`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "paragraph3":
      return (
        <p
          className={`${classes} text-lg`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "paragraph4":
      return (
        <p
          className={`${classes} text-base`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    case "paragraph5":
      return (
        <p
          className={`${classes} text-sm`}
          dangerouslySetInnerHTML={{ __html: htmlSafeText }}
        ></p>
      );
    default:
      return <p></p>;
  }
}

export function GenerateTexts(props: {
  texts: (TextBlockProps | ImageBlockProps)[];
}) {
  return props.texts.map((text, i) => {
    if ("text" in text && "level" in text) {
      return <Text {...text} key={i} />;
    } else if (text.blockType === "imageBlock") {
      return (
        <Image
          key={i}
          src={getImageSrc(text.image.src, "cms")}
          alt={text.image.alt || "image-top"}
          width={1500}
          height={1500}
          className={`${text.image.shadow === "true" && "shadow-xl"} ${text.image.rounded === "true" && "rounded-xl"} w-full max-w-300 h-auto my-10`}
        />
      );
    }
  });
}

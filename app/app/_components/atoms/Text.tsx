import {
  ImageBlockProps,
  TextBlockProps,
} from "@/app/(landingPages)/_components/textSection/TextSection";
import { textColor, TextColorType } from "@roo/shared/src/design/colors";
import {
  Font,
  FontWeight,
  fontWeight,
  TextTag,
  FontSize,
  font,
  fontSize,
} from "@roo/shared/src/design/texts";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

export type TextProps = {
  text: string;
  tag: TextTag;
  link?: string;
  size?: FontSize;
  fontWeight?: FontWeight;
  font?: Font;
  color?: TextColorType;
  className?: string;
};

export default function Text(props: TextProps) {
  const color = props.color ? textColor[props.color] : textColor.black;
  const textFont = props.font ? font[props.font] : font.heading;
  const weight = props.fontWeight && fontWeight[props.fontWeight];
  const size = props.size ? fontSize[props.size] : fontSize.body;

  //   const align = props.textAlign && textAlign[props.textAlign];
  const classes = `${props.className || ""} ${color || ""} ${weight || ""} ${textFont || ""} ${size || ""} animate`;

  const htmlSafeText = sanitizeHtml(props.text, {
    allowedTags: ["strong", "span", "a", "br", "link"],
    allowedAttributes: {
      a: ["href", "target"],
      span: ["class"],
      link: ["href", "target", "class"],
    },
  });

  const Tag = props.tag || "p";

  let content = (
    <>
      <Tag
        className={`${classes}`}
        dangerouslySetInnerHTML={{ __html: htmlSafeText }}
      ></Tag>
    </>
  );

  //   switch (props.tag) {
  //     case "h1":
  //       content = (
  //         <h1
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></h1>
  //       );
  //       break;
  //     case "h2":
  //       content = (
  //         <h2
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></h2>
  //       );
  //       break;
  //     case "h3":
  //       content = (
  //         <h3
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></h3>
  //       );
  //       break;
  //     case "h4":
  //       content = (
  //         <h4
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></h4>
  //       );
  //       break;
  //     case "h5":
  //       content = (
  //         <h5
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></h5>
  //       );
  //       break;
  //     case "h6":
  //       content = (
  //         <h6
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></h6>
  //       );
  //       break;
  //     case "em":
  //       content = (
  //         <em
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></em>
  //       );
  //       break;
  //     case "p":
  //       content = (
  //         <p
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></p>
  //       );
  //       break;
  //     case "span":
  //       content = (
  //         <span
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></span>
  //       );
  //       break;
  //     default:
  //       content = (
  //         <p
  //           className={`${classes}`}
  //           dangerouslySetInnerHTML={{ __html: htmlSafeText }}
  //         ></p>
  //       );
  //   }

  if (props.link) {
    content = <Link href={props.link}>{content}</Link>;
  }

  return <>{content}</>;
}

export function GenerateTexts(props: {
  texts: (TextBlockProps | ImageBlockProps)[];
}) {
  return props.texts.map((text, i) => {
    if ("text" in text && "tag" in text) {
      return <Text {...text} key={i} />;
    } else if (text.blockType === "imageBlock") {
      return (
        <Image
          key={i}
          src={getImageSrc(text.image.src, "cms")}
          alt={text.image.alt || "image-top"}
          width={1500}
          height={1500}
          className={`${text.image.shadow && "shadow-xl"} ${text.image.rounded && "rounded-xl"} w-full max-w-300 h-auto my-10`}
        />
      );
    } else {
      return null;
    }
  });
}

import {
  ImageBlockProps,
  TextBlockProps,
} from "@/app/(landingPages)/_components/textSection/TextSection";
import { textColor, TextColorType } from "@roo/shared/src/design/colors";
import {
  Font,
  font,
  FontSize,
  fontSize,
  FontWeight,
  fontWeight,
  TextTag,
} from "@roo/shared/src/design/texts";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import classes from "./Text.module.scss";

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
  const color = `text-${props.color || "black"}`;
  const textFont = props.font ? font[props.font] : font.heading;
  const weight = `fontWeight-${props.fontWeight || "base"}`;
  const size = `fontSize-${props.size || "bodyMd"}`;

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
        <div key={i} className="w-full max-w-300 h-auto">
          <Image
            src={getImageSrc(text.image.src, "cms")}
            alt={text.image.alt || "image-top"}
            width={1500}
            height={1500}
            className={`${text.image.shadow && "shadow-xl"} ${text.image.rounded && "rounded-xl"} w-full max-w-300 h-auto mb-3`}
          />
          {text.image.description && (
            <Text
              text={text.image.description}
              tag="p"
              size="bodyMd"
              className="italic"
            />
          )}
        </div>
      );
    } else {
      return null;
    }
  });
}

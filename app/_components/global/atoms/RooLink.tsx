import Link from "next/link";

export function RooLink(props: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      className={`${props.className} hover:text-pink transition-all ease-in-out`}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}

import Link from "next/link";

export function RooLink({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      className={`${className} hover:text-pink transition-all ease-in-out`}
      href={href}
    >
      {text}
    </Link>
  );
}

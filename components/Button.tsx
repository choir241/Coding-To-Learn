import Link from "next/link";

export interface ButtonElement {
  text: string | JSX.Element;
  classNames?: string;
  href: string;
  key?: string;
}

export function ButtonLink(props: ButtonElement) {
  return (
    <Link href={props.href} key={props.key} className={props.classNames}>
      {props.text}
    </Link>
  );
}

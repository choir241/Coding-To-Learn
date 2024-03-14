import Link from "next/link";
import { MouseEvent } from "react";

export interface ButtonElement {
  text: string | JSX.Element;
  classNames?: string;
  href: string;
  key?: string;
}

export function ButtonLink(props: ButtonElement) {
  return (
    <a href={props.href} key={props.key} className={props.classNames}>
      {props.text}
    </a>
  );
}

export interface ButtonInterface {
  onClick: () => void;
  text: string;
  key?: string;
  classNames?: string;
}

export function Button(props: ButtonInterface) {
  return (
    <button
      onClick={props.onClick}
      key={props.key}
      className={props.classNames}
    >
      {props.text}
    </button>
  );
}

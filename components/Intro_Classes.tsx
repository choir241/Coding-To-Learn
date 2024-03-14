import { ButtonLink } from "./Button";
import Image, { StaticImageData } from "next/image";
import style from "../css/main.module.css";

interface IntroClassesElement {
  paragraphText: string[];
  h1: string;
  buttonLinkText: string;
  buttonHref: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

export default function IntroClasses(props: IntroClassesElement) {
  return (
    <main
      id="intro"
      className={`${style.flex} ${style.column} ${style.alignCenter}`}
    >
      <h1>{props.h1}</h1>

      <article
        className={`${style.flex} ${style.alignCenter} ${style.justifyEvenly}`}
      >
        <section
          className={`${style.flex} ${style.column} ${style.alignCenter}`}
        >
          {props.paragraphText.map((text: string) => {
            return <p key={text}>{text}</p>;
          })}

          {ButtonLink({
            text: props.buttonLinkText,
            href: props.buttonHref,
            classNames: style.button,
          })}
        </section>

        <Image src={props.imageSrc} alt={props.imageAlt} />
      </article>
    </main>
  );
}

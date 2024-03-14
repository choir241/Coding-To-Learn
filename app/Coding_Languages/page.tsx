import C from "../../assets/C.png";
import Java from "../../assets/Java.png";
import PHP from "../../assets/PHP.png";
import Python from "../../assets/Python.png";
import ReactLogo from "../../assets/React.png";
import Swift from "../../assets/Swift.jpg";
import TypeScript from "../../assets/TypeScript.png";
import Ruby from "../../assets/Ruby.png";
import Image, { StaticImageData } from "next/image";
import style from "../../css/main.module.css";
import { ButtonLink } from "../../components/Button";

export default function Coding_Languages() {
  interface codingInterface {
    src: StaticImageData;
    alt: string;
    text: string;
  }

  const codingSection = [
    { src: C, alt: "Logo of C# language", text: "C#" },
    { src: Java, alt: "Logo of Java language", text: "Java" },
    { src: PHP, alt: "Logo of PHP language", text: "PHP" },
    { src: Python, alt: "Logo of Python language", text: "Python" },
  ];

  const codingSection2 = [
    { src: ReactLogo, alt: "Logo of React language", text: "React" },
    { src: Swift, alt: "Logo of Swift language", text: "Swift" },
    { src: TypeScript, alt: "Logo of TypeScript language", text: "TypeScript" },
    { src: Ruby, alt: "Logo of Ruby language", text: "Ruby" },
  ];

  return (
    <main id="coding">
      <h1>Coding Languages</h1>
      <section
        className={`${style.flex} ${style.alignCenter} ${style.justifyBetween}`}
      >
        {codingSection.map((image: codingInterface) => {
          return (
            <div key={image.text}>
              {ButtonLink({
                text: (
                  <section
                    className={`${style.flex} ${style.column} ${style.alignCenter}`}
                  >
                    <Image src={image.src} alt={image.alt} />{" "}
                    <h2>{image.text}</h2>
                  </section>
                ),
                href: `/languages/${image.text}`,
              })}
            </div>
          );
        })}
      </section>

      <section
        className={`${style.flex} ${style.alignCenter} ${style.justifyBetween}`}
      >
        {codingSection2.map((image: codingInterface) => {
          return (
            <div key={image.text}>
              {ButtonLink({
                text: (
                  <section
                    className={`${style.flex} ${style.column} ${style.alignCenter}`}
                  >
                    <Image src={image.src} alt={image.alt} />{" "}
                    <h2>{image.text}</h2>
                  </section>
                ),
                href: `/languages/${image.text}`,
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
}

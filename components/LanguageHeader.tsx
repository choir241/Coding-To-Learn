import style from "../css/main.module.css";
import { ButtonLink, ButtonElement } from "./Button";

export default function LanguageHeader() {
  const links = [
    { text: "Home", href: "/" },
    { text: "C#", href: "/languages/C" },
    { text: "Java", href: "/languages/Java" },
    { text: "PHP", href: "/languages/PHP" },
    { text: "Python", href: "/languages/Python" },
    { text: "React", href: "/languages/React" },
    { text: "Swift", href: "/languages/Swift" },
    { text: "TypeScript", href: "/languages/TypeScript" },
    { text: "Ruby", href: "/languages/Ruby" },
  ];

  return (
    <header className={style.header}>
      <nav>
        <ul
          className={`${style.flex} ${style.column} ${style.alignStart} ${style.justifyBetween}`}
        >
          {links.map((lang: ButtonElement) => {
            return (
              <li key={lang.href}>
                {ButtonLink({ text: lang.text, href: lang.href })}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

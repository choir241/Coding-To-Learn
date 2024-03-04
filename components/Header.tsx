import { ButtonLink, ButtonElement } from "./Button";
import style from "../css/main.module.css";

export default function Header() {
  const links = [
    { text: "Home", href: "/" },
    { text: "100 Devs", href: "/100_Devs" },
    { text: "Odin Project", href: "/Odin_Project" },
    { text: "Free Code Camp", href: "/Free_Code_Camp" },
    { text: "Languages", href: "/Coding_Languages" },
  ];

  return (
    <header>
      <nav className={`${style.flex} ${style.justifyCenter}`}>
        <ul className={`${style.flex} ${style.justifyBetween}`}>
          {links.map((button: ButtonElement) => {
            const text = button.text;
            const href = button.href;
            return (
              <li>
                {ButtonLink({
                  key: href,
                  text: text,
                  href: href,
                })}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

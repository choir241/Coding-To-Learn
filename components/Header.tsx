"use client";
import { ButtonLink, ButtonElement } from "./Button";
import style from "../css/main.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const links = [
    { text: "Home", href: "/" },
    { text: "100 Devs", href: "/100_Devs" },
    { text: "Odin Project", href: "/Odin_Project" },
    { text: "Free Code Camp", href: "/Free_Code_Camp" },
    { text: "Languages", href: "/Coding_Languages" },
  ];

  const [toggleNav, setToggleNav] = useState<boolean>(true);

  return (
    <header>
      <CiMenuBurger
        className={`${style.menu} ${toggleNav ? style.show : style.hidden}`}
        onClick={() => setToggleNav(false)}
      />
      <IoMdClose
        className={`${toggleNav ? style.hidden : style.show}`}
        onClick={() => setToggleNav(true)}
      />
      <nav
        className={`${style.flex} ${style.justifyCenter} ${toggleNav ? style.hidden : style.show}`}
      >
        <ul className={`${style.flex} ${style.justifyBetween} ${style.nav}`}>
          {links.map((button: ButtonElement) => {
            const text = button.text;
            const href = button.href;
            return (
              <li key={href}>
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

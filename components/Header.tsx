"use client";
import { ButtonLink, ButtonElement } from "./Button";
import style from "../css/main.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Search from "./Search";
import LanguageHeader from "./LanguageHeader";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Header() {
  const links = [
    { text: "Home", href: "/" },
    { text: "100 Devs", href: "/100_Devs" },
    { text: "Odin Project", href: "/Odin_Project" },
    { text: "Free Code Camp", href: "/Free_Code_Camp" },
  ];

  const [toggleNav, setToggleNav] = useState<boolean>(true);
  const [toggleLang, setToggleLang] = useState<boolean>(true);

  return (
    <header>
      <section className={`${style.flex} ${style.justifyBetween}`}>
        {toggleLang ? (
          ""
        ) : (
          <button
            className={`${style.flex} ${style.justifyEnd}`}
            onClick={() => setToggleLang(true)}
          >
            <RiArrowGoBackFill />
          </button>
        )}
        <CiMenuBurger
          className={`${style.menu} ${toggleNav ? style.show : style.hidden}`}
          onClick={() => setToggleNav(false)}
        />
        <IoMdClose
          className={`${toggleNav ? style.hidden : style.show}`}
          onClick={() => setToggleNav(true)}
        />
      </section>
      <nav
        className={`${style.flex} ${style.justifyCenter} ${style.column} ${toggleNav ? style.hidden : style.show}`}
      >
        <section className={`${style.flex} ${style.justifyEnd}`}>
          <Search />
        </section>
        {toggleLang ? (
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
            <li>
              <button className="langBtn" onClick={() => setToggleLang(false)}>
                Languages
              </button>
            </li>
          </ul>
        ) : (
          <LanguageHeader />
        )}
      </nav>
    </header>
  );
}

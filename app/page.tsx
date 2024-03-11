import React from "react";
import style from "../css/main.module.css";
import { ButtonLink, ButtonElement } from "../components/Button";
import Search from "../components/Search";

export default function LandingPage() {
  const links = [
    { text: <h3>100 Devs</h3>, href: "/100_Devs" },
    { text: <h3>Odin Project</h3>, href: "/Odin_Project" },
    { text: <h3>Free Code Camp</h3>, href: "/Free_Code_Camp" },
  ];

  return (
    <main id="main">
      <Search/>
      <h1>Learn How To Code</h1>

      <h2>New To Coding?</h2>

      <section
        className={`${style.course} ${style.flex} ${style.justifyBetween}`}
      >
        {links.map((button: ButtonElement) => {
          const text = button.text;
          const href = button.href;
          return ButtonLink({
            text: text,
            href: href,
            key: href,
          });
        })}
      </section>

      {ButtonLink({
        href: "/Coding_Languages",
        text: (
          <section className={`${style.flex} ${style.alignCenter}`}>
            <h2>Learn Code Languages</h2>
            <i className={style.arrow}>&rarr;</i>
          </section>
        ),
      })}
    </main>
  );
}

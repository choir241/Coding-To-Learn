import style from "../css/main.module.css";
import { ButtonLink } from "./Button";

interface Resource {
  name: string;
  href: string;
}

interface LanguageElement {
  h1: string;
  text?: string;
  resources: Resource[];
}

export default function Language(props: LanguageElement) {
  return (
    <main
      id="language"
      className={`${style.flex} ${style.column} ${style.alignEnd}`}
    >
      <div className={style.headContainer}>
        <h1>{props.h1}</h1>
      </div>

      {props?.text ? <p>{props.text}</p> : ""}

      <table>
        <thead>
          <tr>
            <td>
              <h2>Resource</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {props?.resources?.map((resource: Resource, i: number) => {
            return (
              <tr
                key={`${resource.name} ${resource.href}`}
                className={i % 2 == 0 ? style.colorRow : ""}
              >
                <td>
                  <h6>{resource.name}</h6>
                </td>
                <td>
                  {ButtonLink({
                    href: resource.href,
                    text: "Link",
                    classNames: style.button,
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        className={`${style.flex} ${style.justifyCenter} ${style.btnContainer}`}
      >
        <button className={style.button}>See More</button>
      </div>
    </main>
  );
}

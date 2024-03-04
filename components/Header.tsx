import { ButtonLink } from "./Button"
import style from "../css/main.module.css";

export default function Header(){
    return(
        <header>
            <nav className = {`${style.flex} ${style.justifyCenter}`}>
                <ul className = {`${style.flex} ${style.justifyBetween}`}>
                    <li>{ButtonLink({text: "Home", href: "/"})}</li>
                    <li>{ButtonLink({text: "100 Devs", href: "/100_Devs"})}</li>
                    <li>{ButtonLink({text: "Odin Project", href: "/Odin_Project"})}</li>
                    <li>{ButtonLink({text: "Free Code Camp", href: "/Free_Code_Camp"})}</li>
                    <li>{ButtonLink({text: "Languages", href: "/Coding_Languages"})}</li>
                </ul>
            </nav>
        </header>
    )
}
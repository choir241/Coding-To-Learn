import {ButtonLink} from "../../components/Button";
import HundredDevs from "../../assets/100_Devs_Preview.png";
import Image from "next/image";
import style from "../../css/main.module.css";

export default function Devs(){
    return(
        <main id = "devs" className = {`${style.flex} ${style.column} ${style.alignCenter}`}>

            <h1>100 Devs</h1>

            <article className = {`${style.flex} ${style.alignCenter} ${style.justifyEvenly}`}>
                <section className = {`${style.flex} ${style.column} ${style.alignCenter}`}>
                    <p>100 Devs is an online agency with a free online academy.</p>

                    <p>With a supportive online community to help you along the way.</p>

                    <p>Challenging you with tasks to help you in your journey as an Engineer.</p>

                    <p>Providing free resources to push your career along the right path.</p>

                    {ButtonLink({
                        text: "100 Devs Site",
                        href: "https://100devs.org",
                        classNames: style.button
                    })}

                </section>

                <Image src = {HundredDevs} alt = "image preview of 100 Devs current website"/>


            </article>

            
           
        </main>
    )
}
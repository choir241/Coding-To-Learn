import React from "react";
import style from "../css/main.module.css";
import {ButtonLink} from "../components/Button";

export default function LandingPage(){
    return(
        <main id = "main">
            <h1>Learn How To Code</h1>

                <h2>New To Coding?</h2>

                <section className = {`${style.course} ${style.flex} ${style.justifyBetween}`}>
                    {ButtonLink({
                        href: "/100_Devs",
                        text: <h3>100Devs</h3>                        
                    })}

                    {ButtonLink({
                        href: "/Odin_Project",
                        text: <h3>Odin Project</h3>                        
                    })}

                    {ButtonLink({
                        href: "/Free_Code_Camp",
                        text: <h3>Free Code Camp</h3>                        
                    })}
                 
                </section>

            <section className = {`${style.flex} ${style.alignCenter}`}>
                <h2>Learn Code Languages</h2> 
                {ButtonLink({
                    href: "/Coding_Languages",
                    text: <i className = {style.arrow}>&rarr;</i>
                })}
                
            </section>
        </main>
    )
}
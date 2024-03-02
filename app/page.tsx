import React from "react"
import style from "../css/main.module.css";

export default function LandingPage(){
    return(
        <main id = "main">
            <h1>Learn How To Code</h1>

            <section>
                <h2>New To Coding?</h2>

                <section className = {`${style.course} ${style.flex} ${style.justifyBetween}`}>
                    <button><h3>100 Devs</h3></button>
                    
                    <button><h3>Odin Project</h3></button>

                    <button><h3>Free Code Camp</h3></button>                    
                </section>
            </section>

            <section className = {`${style.flex} ${style.alignCenter}`}>
                <h2>Learn Code Languages</h2> <button className = {style.arrow}>&rarr;</button>
            </section>
        </main>
    )
}
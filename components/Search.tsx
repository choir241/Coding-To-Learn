import { ButtonLink } from "./Button"

export default function Search(){
    return(
        <form>
            <input type = "search" placeholder = "search" />
            <ButtonLink text = "search" href = "/search"/>
        </form>
    )
}
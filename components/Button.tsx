import Link from "next/link";

interface ButtonElement{
    text: string | JSX.Element,
    classNames?: string,
    href: string
}

export function ButtonLink(props: ButtonElement){
    return(
        <Link href = {props.href} 
        className = {props.classNames}>
            {props.text}
        </Link>
    )
}
import { CardContainer } from "./styles"
import { TruncateText } from "../../lib/TruncateText"
import { Link } from "react-router-dom"

interface CardProps {
    title: string,
    date: string,
    paragraph: string,
    user: string,
    comments: number,
    url: string
}

export function PostCard(props: CardProps) {
    return (

        <Link to={`/post`} state={{
            title: props.title,
            text: props.paragraph,
            dia: props.date,
            user: props.user,
            comments: props.comments,
            url: props.url
        }}>
            <CardContainer>
                <h3>{props.title}</h3>
                <span>{props.date}</span>
                <p>{TruncateText(props.paragraph)}</p>
            </CardContainer>
        </Link>
    )
}
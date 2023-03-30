import { CardContainer } from "./styles"
import { TruncateText } from "../../lib/TruncateText"

interface CardProps {
    title: string,
    date: string,
    paragraph: string,
}

export function PostCard(props: CardProps) {
    return (
        <CardContainer>
            <h3>{props.title}</h3>
            <span>{props.date}</span>
            <p>{TruncateText(props.paragraph)}</p>
        </CardContainer>
    )
}
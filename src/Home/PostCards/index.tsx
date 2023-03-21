import { CardContainer } from "./styles"
import { TruncateText } from "../../lib/TruncateText"

const textParagraf = "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. "

export function PostCard() {
    return (
        <CardContainer>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
            <p>{TruncateText(textParagraf)}</p>
        </CardContainer>
    )
}
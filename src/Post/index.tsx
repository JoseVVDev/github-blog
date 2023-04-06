import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer, PostHeaderContainer, PostLinkContainer, PostTitleContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";

interface DataInterface {
    title: string,
    text: string,
    dia: string,
    user: string,
    comments: number,
    url: string
}

export function Post() {
    const data: DataInterface = useLocation().state

    return (
        <>
        <PostHeaderContainer>
            <PostTitleContainer>
                <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size={"sm"}/>&nbsp;&nbsp;VOLTAR</Link>
                <a href={data.url} target="_blank" rel="noreferrer noopener">VER NO GITHUB&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"sm"}/></a>
                <span>{data.title}</span>
                <PostLinkContainer>
                    <span><FontAwesomeIcon icon={faGithub}/> {data.user}</span>
                    <span><FontAwesomeIcon icon={faCalendar}/> {data.dia}</span>
                    <span><FontAwesomeIcon icon={faComment}/> {data.comments} Comentários</span>
                </PostLinkContainer>
            </PostTitleContainer>
        </PostHeaderContainer>
        <PostContainer>
            <p>{data.text}</p>
        </PostContainer>
        </>
    )
}
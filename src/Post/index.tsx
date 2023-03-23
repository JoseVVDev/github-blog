import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer, PostHeaderContainer, PostLinkContainer, PostTitleContainer } from "./styles";

export function Post() {
    return (
        <>
        <PostHeaderContainer>
            <PostTitleContainer>
                <a href="/"><FontAwesomeIcon icon={faChevronLeft} size={"sm"}/>&nbsp;&nbsp;VOLTAR</a>
                <a href="/">VER NO GITHUB&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"sm"}/></a>
                <span>JavaScript data types and data structures</span>
                <PostLinkContainer>
                    <span><FontAwesomeIcon icon={faGithub}/> Seu Nome</span>
                    <span><FontAwesomeIcon icon={faGithub}/> Seu Nome</span>
                    <span><FontAwesomeIcon icon={faGithub}/> Seu Nome</span>
                </PostLinkContainer>
            </PostTitleContainer>
        </PostHeaderContainer>
        <PostContainer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quas at est numquam consequuntur et soluta perferendis omnis, consequatur esse modi! Aut veniam molestias laboriosam, facilis recusandae similique hic totam.</p>
        </PostContainer>
        </>
    )
}
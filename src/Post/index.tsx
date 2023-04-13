import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer, PostHeaderContainer, PostLinkContainer, PostTitleContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, dracula, oneDark, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
                    <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size={"sm"} />&nbsp;&nbsp;VOLTAR</Link>
                    <a href={data.url} target="_blank" rel="noreferrer noopener">VER NO GITHUB&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"sm"} /></a>
                    <span>{data.title}</span>
                    <PostLinkContainer>
                        <span><FontAwesomeIcon icon={faGithub} /> {data.user}</span>
                        <span><FontAwesomeIcon icon={faCalendar} /> {data.dia}</span>
                        <span><FontAwesomeIcon icon={faComment} /> {data.comments} Comentários</span>
                    </PostLinkContainer>
                </PostTitleContainer>
            </PostHeaderContainer>
            <PostContainer>
                <ReactMarkdown
                    children={data.text}
                    components={{
                        code({ node, inline, className, children, style, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    language={match[1]}
                                    style={oneDark}
                                    {...props}
                                />
                            ) : (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    language="javascript"
                                    style={oneDark}
                                    {...props}
                                />
                            );
                        },
                    }}
                />
            </PostContainer>
        </>
    )
}
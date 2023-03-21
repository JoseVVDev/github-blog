import { HomeContainer, HomeLinkContainer, HomeTextContainer, PostsContainer, SearchContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { PostCard } from "./PostCards";

export default function Home() {
    return (
        <>
        <HomeContainer>
            <img src="https://pbs.twimg.com/profile_images/1524422557268684800/_tXGK0PZ_400x400.jpg" alt="" />
            <HomeTextContainer>
                <span>Nome User</span>
                <a href="/">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"sm"}/></a>
                <p>Tristique volut pat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <HomeLinkContainer>
                    <span><FontAwesomeIcon icon={faGithub}/> Seu Nome</span>
                    <span><FontAwesomeIcon icon={faGithub}/> Seu Nome</span>
                    <span><FontAwesomeIcon icon={faGithub}/> Seu Nome</span>
                </HomeLinkContainer>
            </HomeTextContainer>
        </HomeContainer>
        <SearchContainer>
            <p>Publicações</p>
            <span>6 publicações</span>
            <input type="text" placeholder="Buscar conteúdo" />
        </SearchContainer>
        <PostsContainer>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </PostsContainer>
        </>
    )
}
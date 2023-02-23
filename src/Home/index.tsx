import { HomeContainer, HomeLinkContainer, HomeTextContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
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
    )
}
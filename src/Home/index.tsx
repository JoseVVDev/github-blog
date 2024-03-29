import { HomeContainer, HomeLinkContainer, HomeTextContainer, PostsContainer, SearchContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faFolderTree, faAt } from '@fortawesome/free-solid-svg-icons'
import { PostCard } from "./PostCards";
import axios from "axios";
import {HandleDate} from '../lib/HandleDate'
import { useState } from "react";

interface PostInterface {
    title: string,
    created_at: string,
    body: string,
    user: {
        login: string
    },
    comments: number,
    html_url: string,
}

interface UserInterface {
    login: string,
    avatar_url: string,
    html_url: string,
    name: string,
    bio: string,
    public_repos: number,
    blog: string
}


const Posts: PostInterface[] = 
    await axios.get('https://api.github.com/repos/JoseVVDev/github-blog/issues')
        .then(res => {
            return res.data
        });

        
const User: UserInterface = 
    await axios.get('https://api.github.com/users/JoseVVDev')
        .then(res => {
            return res.data
        })

export default  function Home() {
    const [posts_, setPosts_] = useState(Posts)

    const handleSearch = function (query: React.ChangeEvent<HTMLInputElement>) {
        const searchQuery = query.target.value
        let filteredPosts = [...Posts]
        filteredPosts = filteredPosts.filter((post) => {
            return post.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        });
        setPosts_(filteredPosts);
    }

    return (
        <>
        <HomeContainer>
            <img src={User.avatar_url} alt="" />
            <HomeTextContainer>
                <span>{User.name}</span>
                <a href={User.html_url} target="_blank" rel="noreferrer noopener">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"sm"}/></a>
                <p>{User.bio}</p>
                <HomeLinkContainer>
                    <span><FontAwesomeIcon icon={faGithub}/> {User.login}</span>
                    <span><FontAwesomeIcon icon={faFolderTree}/> {User.public_repos} Repositórios</span>
                    <span><FontAwesomeIcon icon={faAt}/> {User.blog}</span>
                </HomeLinkContainer>
            </HomeTextContainer>
        </HomeContainer>
        <SearchContainer>
            <p>Publicações</p>
            <span>{posts_.length} publicações</span>
            <input 
                type="text" 
                placeholder="Buscar conteúdo" 
                onChange={handleSearch} 
            />
        </SearchContainer>
        <PostsContainer>
            {
                posts_.map(post => {
                    return <PostCard 
                        title={post.title} 
                        date={HandleDate(post.created_at)} 
                        paragraph={post.body} 
                        user={post.user.login} 
                        url={post.html_url}
                        comments={post.comments} 
                        key={post.title + post.created_at}/>
                })
            }
        </PostsContainer>
        </>
    )
}
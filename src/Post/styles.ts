import styled from "styled-components";

export const PostHeaderContainer = styled.header`
    width: 60%;
    margin: 0 auto;
    display: flex;
    background: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    padding: 32px;
    flex-direction: row;
    margin-top: -80px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    > img {
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`
export const PostTitleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    color: ${props => props.theme["base-text"]};

    > span {
        margin-top: 20px;
        margin-bottom: 8px;
        font-size: ${props => props.theme["tx-24"]};
        font-weight: ${props => props.theme.bold};
        color: ${props => props.theme["base-title"]};
        flex-basis: 100%;
    }
    
    a {
        font-size: ${props => props.theme["tx-12"]};
        text-decoration: none;
        color: ${props => props.theme["blue"]};        
        font-weight: ${props => props.theme.bold};
    }

    p {
        font-size: ${props => props.theme["tx-16"]};
        font-weight: ${props => props.theme.regular};
    }
`
export const PostLinkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;

    svg {
        color: ${props => props.theme["base-label"]};
        margin-right: 4px;
    }

    span {
        color: ${props => props.theme["base-subtitle"]};
    }
`
export const PostContainer = styled.div`
    width: 60%;
    margin: 40px auto;
    padding: 32px;
    color: ${props => props.theme["base-text"]};
    font-size: ${props => props.theme["tx-16"]};
    `
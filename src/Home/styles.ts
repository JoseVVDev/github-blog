import styled from "styled-components";

export const HomeContainer = styled.header`
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

export const HomeTextContainer = styled.div`
    margin-left: 32px;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    align-content: space-between;
    color: ${props => props.theme["base-text"]};

    > span {
        font-size: ${props => props.theme["tx-24"]};
        font-weight: ${props => props.theme.bold};
        color: ${props => props.theme["base-title"]};
    }

    a {
        margin-left: auto;
        font-size: ${props => props.theme["tx-12"]};
        text-decoration: none;
        color: ${props => props.theme["blue"]};        
        font-weight: ${props => props.theme.bold};

        > svg {
            margin-left: 5px;
        }
    }

    p {
        font-size: ${props => props.theme["tx-16"]};
        font-weight: ${props => props.theme.regular};
    }
`


export const HomeLinkContainer = styled.div`
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
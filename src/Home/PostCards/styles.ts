import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme["base-post"]};
    padding: 32px;
    border-radius: 10px;
    height: 260px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    overflow: hidden;
    gap: 10px;
    align-items: center;

    h3 {
        color: ${props => props.theme["base-title"]};
        max-width: 80%;
        font-size: ${props => props.theme["tx-20"]};
        align-self: baseline;
    }

    span {
        color: ${props => props.theme["base-span"]};
        text-align: end;
        font-size: ${props => props.theme["tx-14"]};
        align-self: baseline;
    }

    p {
        color: ${props => props.theme["base-text"]};
        overflow: hidden;
        max-height: 125px;
        font-size: ${props => props.theme["tx-16"]};
    }
`
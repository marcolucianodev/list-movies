import styled from "styled-components";

export const FooterContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    a {
        color: #FFFFFF;
        text-decoration: none;
        margin-right: 20px;

        &:hover {
            text-decoration: underline;
        }
    }
` 
import styled from "styled-components";

export const SearchMovieContainer = styled.main`
    padding: 50px;

    h1 {
        padding: 20px 0;
    }

    h1 span {
        color: red;
    }
`;

export const MoviesContent = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const MovieBox = styled.article`
    display: flex;
    flex-direction: column;

    img {
        max-width: 180px;
        transform: scale(0.9);
        transition: all ease 0.3s;

        :hover {
            transform: scale(1);
        }
    }
`
import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 50px;
`;

export const Brand = styled.section`
    display: flex;
    flex: 1;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 10px;
        color: red;

        span {
            font-family: 'Archivo Black', sans-serif;
            font-size: 35px;
        }
    }
`;

export const Search = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

export const FormSearch = styled.form`
    display: flex;
    gap: 5px;
    position: relative;

    .input-is-open {
        transition: 0.4s;
        opacity: 1;
        right: 40px;
    }

    .input-is-closed {
        opacity: 0;
        right: -40px;
        transition: 0.4s;
    }
`

export const InputSearch = styled.input`
    padding: 5px;
    font-size: 16px;
    border: none;
    transition: 0.4s;
    position: absolute;
`;

export const SearchButton = styled.button`
    padding: 5px 10px;
    background-color: red;
    border: none;
    color: #FFF;
    border-radius: 3px;
    cursor: pointer;
`;
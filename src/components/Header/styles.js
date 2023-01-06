import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 50px;

    @media (max-width: 590px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const Brand = styled.section`
    display: flex;
    flex: 1;

    @media (max-width: 590px) {
        justify-content: center;
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 10px;
        color: red;

        @media (max-width: 768px) {
            gap: 5px;
        }

        @media (max-width: 880px) {
            gap: 5px;
        }

        svg {
            @media (max-width: 768px) {
                width: 22px;
            }

            @media (max-width: 880px) {
                width: 36px;
            }
        }

        span {
            font-family: 'Archivo Black', sans-serif;
            font-size: 35px;

            @media (max-width: 768px) {
                font-size: 20px;
            }

            @media (max-width: 880px) {
                font-size: 25px;
            }
        }
    }
`;

export const Search = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    @media (max-width: 590px) {
        justify-content: center;
    }
`;

export const FormSearch = styled.form`
    display: flex;
    gap: 5px;
    position: relative;

`

export const InputSearch = styled.input`
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 30px;
`;

export const SearchButton = styled.button`
    padding: 5px 13px;
    background-color: red;
    border: none;
    color: #FFF;
    border-radius: 5px;
    cursor: pointer;
`;
import styled from "styled-components";

export const LoaderContent = styled.div`
    width: 100%;
    height: auto;
    padding: 100px 2%;
    display: flex;
    justify-content: center;
    
`

export const Loading = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #e50914;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    padding: 50px;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
import styled from "styled-components"


export const MovieRowLeft = styled.div `
    position: absolute;
    width: 40px;
    font-size: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    
`

export const MovieRowRight = styled(MovieRowLeft) `
    right: 0;
`

export const MovieRowContainer = styled.div `
    margin-bottom: 30px;

    h2 {
        padding: 10px 0 0 30px;
    }
    
    /* ${MovieRowLeft}:hover  {
        opacity: 1;
    } */

    :hover ${MovieRowLeft} {
        opacity: 1;
    }
`

export const MovieRowListArea = styled.div `
    overflow-x: hidden;
    padding-left: 30px;

`

export const MovieRowList = styled.div `
    transition: all ease 0.5s;

    .movieRow--item {
        display: inline-block;
        width: 150px;
        cursor: pointer;
    }

    .movieRow--item img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
        &:hover {
            transform: scale(1);
        }
    }

`
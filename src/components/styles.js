import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        background-color: #141414;
    }

    .main--container {
        padding: 30px;
    }
`
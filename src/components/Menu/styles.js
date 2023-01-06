import styled from "styled-components";

export const MenuContainer = styled.nav`
    width: 100%;
    margin: 0 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 2;
`

export const MenuList = styled.ul`
    display: flex;
    list-style: none;
    position: relative;
    width: 50%;

    .submenu-container {
        background-color: rgba(0,0,0,0.8);
        display: flex;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 33px;
        z-index: 2;

        ::after {
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #FFF;
            top: -10px;
            left: 45%;
        }
    }

    .submenu-list {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        list-style: none;
        width: 100%;
        padding: 30px;
        border-top: 4px solid #FFF;
    }

    .submenu-item {
        width: 100%;
        text-align: center;

        a { 
            color: #FFFFFF;
            text-decoration: none;
        }
    }
`;

export const MenuItem = styled.li`

    a {
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    svg {
        transform: rotate(90deg);
        font-size: 20px;
    }
`;

// export const SuMenuContainer = styled.nav`
//     background-color: darkgray;
//     display: flex;
//     max-width: 100%;
//     position: absolute;
//     left: 0;
//     top: 33px;
//     z-index: 2;
// `;

// export const SubMenuList = styled.ul`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//     list-style: none;
// `;

// export const SubMenuItem = styled.li`

// `;
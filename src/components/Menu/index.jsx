import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuContainer, MenuItem, MenuList } from "./styles";

import { MdPlayArrow } from "react-icons/md";

const Menu = () => {

    const [ submenu, setSubmenu ] = useState(false)

    const handleMenu = () => {
        setSubmenu(true)
    }

    return (
        <MenuContainer onMouseLeave={() => setSubmenu(false)}>
            <MenuList>
                <MenuItem onMouseEnter={handleMenu}>
                    <Link to="#">
                        Categorias <MdPlayArrow />
                    </Link>
                </MenuItem>
                {submenu &&
                    <nav className="submenu-container">
                        <ul className="submenu-list">
                            <li className="submenu-item"><Link to="#">Originais</Link></li>
                            <li className="submenu-item"><Link to="#">Recomendados</Link></li>
                            <li className="submenu-item"><Link to="#">Em alta</Link></li>
                            <li className="submenu-item"><Link to="#">Ação</Link></li>
                            <li className="submenu-item"><Link to="#">Comédia</Link></li>
                            <li className="submenu-item"><Link to="#">Terror</Link></li>
                            <li className="submenu-item"><Link to="#">Romance</Link></li>
                            <li className="submenu-item"><Link to="#">Documentários</Link></li>
                        </ul>
                    </nav>
                }
            </MenuList>
        </MenuContainer>
    )
}

export default Menu;
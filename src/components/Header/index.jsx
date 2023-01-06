import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    Brand, 
    Container, 
    FormSearch, 
    InputSearch, 
    Search, 
    SearchButton 
} from "./styles";

import { ImVideoCamera } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import Menu from "../Menu";

const Header = () => {

    const [ search, setSearch ] = useState("");
    const [ input, setInput ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    const handleClickSearchButton = () => {
        setInput(!input)
    }

    return (
        <Container>
            <Brand>
                <Link to="/">
                    <ImVideoCamera size={48}/> <span>ListMovie</span>
                </Link>
            </Brand>
            <Menu />
            <Search>
                <FormSearch onSubmit={handleSubmit}>
                    {input &&
                        <InputSearch 
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            placeholder="Busque um filme"
                            className={input ? "input-is-open" : "input-is-closed"}
                        />
                    }
                    <SearchButton type="submit" onClick={handleClickSearchButton}>
                        <FaSearch size={16} />
                    </SearchButton>
                </FormSearch>
            </Search>
        </Container>
    )
}

export default Header;
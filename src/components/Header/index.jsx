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

const Header = () => {

    const [ search, setSearch ] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <Container>
            <Brand>
                <Link to="/">
                    <ImVideoCamera size={48}/> <span>ListMovie</span>
                </Link>
            </Brand>
            <Search>
                <FormSearch onSubmit={handleSubmit}>
                    <InputSearch 
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="Busque um filme"
                    />
                    <SearchButton type="submit">
                        <FaSearch size={16} />
                    </SearchButton>
                </FormSearch>
            </Search>
        </Container>
    )
}

export default Header;
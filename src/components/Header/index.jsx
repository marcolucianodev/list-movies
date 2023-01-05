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

const Header = () => {

    const [ search, setSearch ] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }
    return (
        <Container>
            <Link to="/">
                <Brand>
                    Image Logo
                </Brand>
            </Link>
            <Search>
                <FormSearch onSubmit={handleSubmit}>
                    <InputSearch 
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <SearchButton type="submit">
                        PE
                    </SearchButton>
                </FormSearch>
            </Search>
        </Container>
    )
}

export default Header;
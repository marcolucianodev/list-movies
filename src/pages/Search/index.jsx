import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MovieBox, MoviesContent, SearchMovieContainer } from "./styles";

import { searchFetch } from "../../components/Tmdb/SearchData";
import Loader from "../../components/Loader";


const Search = () => {

    const [ searchMovies, setSearchMovies ] = useState([])

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    useEffect(() => {      

        const searchAllMovies = async () => {
            const list = await searchFetch(query)
            setSearchMovies(list)
        }

        searchAllMovies()

    }, [query])


    return (
        <SearchMovieContainer>
            <h1>Resultados para: <span>{query}</span></h1>
            <MoviesContent>
                {searchMovies.length === 0 && <Loader />}
                {searchMovies.length > 0 &&
                    searchMovies.map((movie) => (
                    <MovieBox key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                        </Link>
                    </MovieBox>
                ))}
            </MoviesContent>
        </SearchMovieContainer>
    )
}

export default Search;
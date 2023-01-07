import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MovieBox, MoviesContent, SearchMovieContainer } from "./styles";
import Loader from "../../components/Loader";


const Search = () => {

    const [ searchMovies, setSearchMovies ] = useState([])

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const API_KEY = '75a925ab7a227e572033e0d7fcc3b9d3'
    const BASE_URL = "https://api.themoviedb.org/3/search/movie/"

    useEffect(() => {      

        const getSearchMovies = async () => {
            try {
                const response = await fetch(`${BASE_URL}?&language=pt-BR&api_key=${API_KEY}&query=${query}`)
                const data = await response.json()
                setSearchMovies(data.results)
            } catch (error) {
                console.log(error)
            }
        }

        getSearchMovies();

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
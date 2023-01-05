import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MovieBox } from "./styles";

import { searchFetch } from "../../components/Tmdb/SearchData";


const Search = () => {

    const [ searchMovies, setSearchMovies ] = useState([])

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    // const API_KEY = '75a925ab7a227e572033e0d7fcc3b9d3'
    // const BASE_URL = "https://api.themoviedb.org/3/search/movie/"

    // const searchTopRated = async () => {

    //     const res = await fetch(`${BASE_URL}?&language=pt-BR&api_key=${API_KEY}&query=${query}`)
    //     const data = await res.json()

    //     setTopRatedMovies(data.results)

    // }

    //ADD NEW HERE
    const resTeste = async () => {
        const list = await searchFetch(query)
        setSearchMovies(list)
    }

    useEffect(() => {      
        //   searchTopRated();

          resTeste()
    }, [query])


    return (
        <>
        <h1>Resultados para: <span>{query}</span></h1>
        <section>
            <div className="main--container" style={{display:"flex", flexWrap:"wrap"}}>
                {searchMovies.length === 0 && <p>Carregando Filmes...</p> }
                {searchMovies.length > 0 &&
                    searchMovies.map((movie) => (
                    <MovieBox key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                        </Link>
                    </MovieBox>
                ))}
            </div>
        </section>
        </>
    )
}

export default Search;
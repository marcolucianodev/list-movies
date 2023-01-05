import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../components/Tmdb/Tmdb";


const Details = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1)
  }

  const [movieList, setMovieList] = useState({});

  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(jsonData => {

    // USANDO DESTRUCTURING:
    const {title, overview, poster_path, release_date} = jsonData;

    const movieList = {
        id,
        title,
        sinopse: overview,
        image: `${image_path}${poster_path}`,
        releaseDate: release_date
    }

    setMovieList(movieList)

    })
  }, [id])

  return (
    <Container>
      <div className="details">
        <img src={movieList.image} alt={movieList.title} />
        <div className="info-movie">
          <h1>{movieList.title}</h1>
          <span className="sinopse">{movieList.sinopse}</span>
          <span className="release">{movieList.releaseDate}</span>
          <button onClick={handleNavigate}>Voltar</button>
        </div>
      </div>
    </Container>
  )
}

export default Details;
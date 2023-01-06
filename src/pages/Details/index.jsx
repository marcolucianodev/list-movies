import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../components/Tmdb/Tmdb";

import { 
  FaStar,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCalendarAlt
} from "react-icons/fa";


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
      const {title, overview, poster_path, release_date, revenue, budget, vote_average, runtime} = jsonData;

      const movieList = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          voteAverage: vote_average.toFixed(1),
          revenue: revenue.toLocaleString("en-US", {style: 'currency', currency:'USD'}),
          budget: budget.toLocaleString("en-US", {style: 'currency', currency:'USD'}),
          runtime

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
          <span className="vote-average"><FaStar /> {movieList.voteAverage}</span>
          <div className="infos">
            <div>
              <span className="info-data">
                <span className="headline">
                  <FaCalendarAlt /> Lançamento
                </span>
                <span className="info-data-item">{movieList.releaseDate}</span>
              </span>
              <span className="info-data">
                <span className="headline">
                  <FaRegClock /> Duração
                </span>
                <span className="info-data-item">{movieList.runtime} minutos</span>
              </span>
            </div>
            <div>
              <span className="info-data">
                <span className="headline">
                  <FaWallet /> Orçamento
                </span>
                <span className="info-data-item">{movieList.budget}</span>
              </span>
              <span className="info-data">
                <span className="headline">
                  <FaChartLine /> Receita
                </span>
                <span className="info-data-item">{movieList.revenue}</span>
              </span>
            </div>
          </div>
          <span className="sinopse">{movieList.sinopse}</span>
          <button onClick={handleNavigate}>Voltar</button>
        </div>
      </div>
    </Container>
  )
}

export default Details;
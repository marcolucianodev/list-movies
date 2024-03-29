import { useEffect, useState } from "react";
// import Tmdb from "../../components/Tmdb/Tmdb.js";
import MovieRow from "../../components/MovieRow";
import Loader from "../../components/Loader"

import getHomeList2 from "../../components/Tmdb/Tmdb.js";


const Home = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // let list = await Tmdb.getHomeList();
      let list = await getHomeList2();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <section>
      <div className="main--container">
        {movieList.length === 0 && <Loader /> }
        {movieList.length > 0 &&
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
      </div>
    </section>
  )
}

export default Home;
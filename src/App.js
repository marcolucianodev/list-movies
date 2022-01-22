import React, { useState, useEffect } from "react";
import Tmdb from "./components/Tmdb/Tmdb.js"
import GlobalStyle from "./components/styles"
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer"

const App = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <>
      <section className="main--container">
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
      </section>
      <Footer />
      

      <GlobalStyle />
    </>
  );
}

export default App;

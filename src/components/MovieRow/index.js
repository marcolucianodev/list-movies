import React, { useState } from "react";
import { MovieRowContainer, MovieRowLeft, MovieRowRight, MovieRowListArea, MovieRowList } from './styles.js';


const MovieRow = ({title, items}) => {


    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <MovieRowContainer>
            <h2>{title}</h2>
            <MovieRowLeft onClick={handleLeftArrow}>
                <span>&lt;</span>
            </MovieRowLeft>
            <MovieRowRight onClick={handleRightArrow}>
                <span>&gt;</span>
            </MovieRowRight>

            <MovieRowListArea>

                <MovieRowList style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                    
                    }}>

                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}

                </MovieRowList>

            </MovieRowListArea>

        </MovieRowContainer>
    );
}   

export default MovieRow;
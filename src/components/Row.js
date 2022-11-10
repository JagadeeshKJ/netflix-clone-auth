import axios from "../axios";
import { useEffect, useState } from "react";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
   const [movies, setMovies] = useState([]);

   const BASE_URL = "https://image.tmdb.org/t/p/original/";

   useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        return request;
    }

    fetchData();
   }, [fetchURL]);

  return (
    <div className='row'>
        <h2>{ title }</h2>

        <div className="row-posters">
            {movies.map((movie) => (
                (isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img key={movie.id}
                        className = {`row-poster ${isLargeRow && 'row-posterL'}`}
                        src={`${BASE_URL}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt = {movie.name} 
                    />
                )
            )}
        </div>
    </div>
  )
}

export default Row;
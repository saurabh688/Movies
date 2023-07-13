import "./Favourite.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/movies/Movies";

const Favourite = () => {
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState<any[]>([]);

  useEffect(() => {
    let data: any = new Set();
    if (movies.length > 0) {
      movies.forEach((item: any) => {
        var config = {
          method: "get",
          url: `https://api.themoviedb.org/3/movie/${item.movieName}?api_key=1f44ec2dd416fe9d5213732250697685&language=en-US                    `,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            data.add(response.data);
            setMovieData([...data]);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
  }, [movies]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://movies-backend-app-e59ccd121a00.herokuapp.com/movies/getMovies",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setMovies(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {movieData.length
        ? movieData.map((item: any) => (
            <span key={item?.id.toString()}>
              <Movies data={item} isAdd={false} />
            </span>
          ))
        : null}
    </>
  );
};

export default Favourite;

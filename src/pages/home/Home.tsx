import "./Home.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  searchDataStart,
  searchMovieDataStart,
} from "../../redux/reduxSlice/movies";
import { RootState } from "../../redux/store";
import Movies from "../../components/movies/Movies";
const Home = () => {
  const { state } = useLocation();

  const moviesData: any = useSelector(
    (state: RootState) => state.movies.movies
  );
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const movieDetailsPage = (Movies: any) => {
    // console.log("click");
    // dispatch(getProduct(Movies.id));
    // navigate("/Movies-details", { state: { Movies } });
  };

  useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

  useEffect(() => {
    dispatch(searchDataStart());
  }, []);

  useEffect(() => {
    console.log("queryqueryquery", state);
    if (!!state?.searchValue) {
      console.log("state?.searchValue", state?.searchValue);
      dispatch(searchMovieDataStart(state?.searchValue));
    } else {
      dispatch(searchDataStart());
    }
  }, [state]);

  return (
    <>
      <div className="home">
        {movies.length
          ? movies.map((item: any) => (
              <span
                onClick={(e: any) => {
                  e.preventDefault();
                  movieDetailsPage(item);
                }}
                key={item?.id.toString()}
              >
                <Movies
                  data={item}
                />
              </span>
            ))
          : null}
      </div>
    </>
  );
};

export default Home;

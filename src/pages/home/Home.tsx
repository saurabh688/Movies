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
import axios from "axios";
const Home = () => {
  const { state } = useLocation();

  const moviesData: any = useSelector(
    (state: RootState) => state.movies.movies
  );
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const saveData = (item: any) => {
    console.log("fdasfawerqwerfdsf", item);
    var data = JSON.stringify({
      movieName: item.id,
    });

    var config = {
      method: "post",
      url: "https://movies-backend-app-e59ccd121a00.herokuapp.com/movies/saveMovie",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
              <span key={item?.id.toString()}>
                <Movies data={item} onClick={() => saveData(item)} isAdd={true} />
              </span>
            ))
          : null}
      </div>
    </>
  );
};

export default Home;

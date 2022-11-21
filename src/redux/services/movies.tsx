import axios from "../../api/axiosController";

export const getMovie = async (searchValue: string) => {
  let uri = `https://api.themoviedb.org/3/search/movie?api_key=1f44ec2dd416fe9d5213732250697685&language=en-US&query=${searchValue}&page=1&include_adult=false`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getMovies = async () => {
  let uri = `https://api.themoviedb.org/3/movie/top_rated?api_key=1f44ec2dd416fe9d5213732250697685`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    throw e;
  }
};

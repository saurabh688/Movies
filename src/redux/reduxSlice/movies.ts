import { createSlice } from "@reduxjs/toolkit";
// import { BuyableProduct } from "../../types";

interface State {
  isLoading: boolean;
  error: boolean;
  movies: any[];
}

const initialState: State = {
  isLoading: true,
  error: false,
  movies: [],
};

export const movieslice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    searchDataStart: (state: State) => ({
      ...initialState,
      isLoading: true,
    }),
    searchDataSuccess: (state: State, action) => {
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
      };
    },
    searchDataFailure: (state: State) => ({
      ...state,
      error: true,
      isLoading: false,
    }),
    searchMovieDataStart: (state: State, action) =>{
      console.log('dfadsfads',action.payload)
      return{
        ...state,
      isLoading: true,
    }},
    searchMovieDataSuccess: (state: State, action) => {
      console.log('action.payloadaction.payload',action.payload)
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movie,
      };
    },
    searchMovieDataFailure: (state: State) => ({
      ...state,
      error: true,
      isLoading: false,
    }),
  },
});

export const {
  searchDataStart,
  searchDataSuccess,
  searchDataFailure,
  searchMovieDataStart,
  searchMovieDataSuccess,
  searchMovieDataFailure,
} = movieslice.actions;
export default movieslice.reducer;

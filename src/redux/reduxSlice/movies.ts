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
    searchDataStart: (state: State, action) => ({
      ...initialState,
      isLoading: true,
    }),
    searchDataSuccess: (state: State, action) => {
      return({
      ...state,
      isLoading: false,
      movies: action.payload.movies,
    })},
    searchDataFailure: (state: State) => ({
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
} = movieslice.actions;
export default movieslice.reducer;

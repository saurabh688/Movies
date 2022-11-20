import { combineReducers } from '@reduxjs/toolkit';
import moviesActions from "./reduxSlice/movies";


const rootReducer = combineReducers({
    movies:moviesActions
});

export default rootReducer;

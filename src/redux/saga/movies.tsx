import { call, put, takeLatest } from "redux-saga/effects";
import {
  searchDataStart,
  searchDataSuccess,
  searchDataFailure,
  searchMovieDataStart,
  searchMovieDataSuccess,
  searchMovieDataFailure,
} from "../reduxSlice/movies";
import { getMovie, getMovies } from "../services/movies";

function* movieSagaWatcher() {
  yield takeLatest([searchDataStart.type, searchMovieDataStart.type], movieWorker);
}

function* movieWorker(action: any): any {
  try {
    switch (action.type) {
      case searchDataStart.type:
        {
          const response: any = yield call(getMovies);
          console.log("ressssss", response);
          yield put(searchDataSuccess({ movies: response.results }));
        }
        break;
      case searchMovieDataStart.type:
        {
          const response: any = yield call(getMovie, action.payload);
          console.log("ressssss", response);
          yield put(searchMovieDataSuccess({ movie: response.results }));
        }
        break;
      default:
        break;
    }
  } catch (err: any) {
    console.error(`Error occuring while calling an action ${action.type}`, err);

    if (action.type === searchDataStart.type) {
      yield put(searchDataFailure);
    }
    if (action.type === searchMovieDataStart.type) {
      yield put(searchMovieDataFailure);
    }
  }
}

export default movieSagaWatcher;

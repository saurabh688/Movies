import { call, put, takeLatest } from "redux-saga/effects";
import {
  searchDataStart,
  searchDataSuccess,
  searchDataFailure,
} from "../reduxSlice/movies";
import { getMovies } from "../services/movies";

function* movieSagaWatcher() {
  yield takeLatest([searchDataStart.type], movieWorker);
}

function* movieWorker(action: any): any {
  try {
    switch (action.type) {
      case searchDataStart.type:
        {
          const response: any = yield call(getMovies, action.payload);
          yield put(searchDataSuccess({ movies: response.data }));
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
  }
}

export default movieSagaWatcher;

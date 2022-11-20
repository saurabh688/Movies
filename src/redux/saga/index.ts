import { all, fork } from 'redux-saga/effects';
import moviesSaga from './movies';


export default function* rootSaga() {
  yield all([
    fork(moviesSaga),
  ]);
}

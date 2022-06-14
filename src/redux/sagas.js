import {all} from 'redux-saga/effects';
import apiSaga from './apiCall/saga';

export default function* rootSaga(getState){
    yield all([
        apiSaga()
      ]);
}
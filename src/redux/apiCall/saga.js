import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { CALL_API,CALL_API_SUCCESS,CALL_API_ERROR } from "../actions";
import { callApiSuccess, callApiError } from "./actions";

import axios from "axios";

const apiCallingCallAsync = async () =>
  await axios
    .get("https://reqres.in/api/users?page=2")
    .then((response) => {
      console.log("responseresponse",response)
      return response;
    })
    .catch((error) => {
      console.log("erooo  group", error);
      return error;
    });

function* apiDataDetails({ payload }) {
  try {
    const userData = yield call(apiCallingCallAsync, payload);
    yield put(callApiSuccess({userData}));
  } catch (error) {
    console.log("Error::::", error);
    yield put(callApiError(error));
  }
}

export function* apireduxData() {
  yield takeEvery(CALL_API_SUCCESS, apiDataDetails);
}

export default function* rootSaga() {
  yield all([fork(apireduxData)]);
}

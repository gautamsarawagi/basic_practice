import {
    CALL_API,
    CALL_API_SUCCESS,
    CALL_API_ERROR
} from "../actions";

export const callApi = (value) => ({
    type: CALL_API,
    payload: value,
});

export const callApiSuccess = (value) => ({
    type: CALL_API_SUCCESS,
    payload: value,
});

export const callApiError = (value) => ({
    type: CALL_API_ERROR,
    payload: value,
});

  
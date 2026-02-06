import { takeLatest, call, put } from "redux-saga/effects";
import { signupApi } from "../../api/Auth/signupApi";
import {
  signupSuccess,
  signupFailure,
  signupRequest
} from "../../reducers/Auth/signupReducer";

function* handleSignup(action) {
  try {
    const response = yield call(signupApi, action.payload);

    yield put(signupSuccess(response));
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

export default function* signupSaga() {
  yield takeLatest(signupRequest.type, handleSignup);
}

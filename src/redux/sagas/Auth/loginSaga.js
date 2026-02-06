import { takeLatest, call, put } from "redux-saga/effects";
import { loginApi } from "../../api/Auth/loginApi";
import {
  loginSuccess,
  loginFailure,
  loginRequest
} from "../../reducers/Auth/loginReducer";

function* handlelogin(action) {
  try {
    const response = yield call(loginApi, action.payload);

    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export default function* loginSaga() {
  yield takeLatest(loginRequest.type, handlelogin);
}

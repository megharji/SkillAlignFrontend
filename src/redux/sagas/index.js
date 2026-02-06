import { all, fork } from 'redux-saga/effects';
import signupSaga from './Auth/signupSaga';
import loginSaga from './Auth/loginSaga';


export default function* authSaga() {
  yield all([
    fork(signupSaga),
    fork(loginSaga),

  ]);
}


import { put, call, takeLatest } from 'redux-saga/effects';
import { useHistory } from 'react-router-dom';

import RegisterActions, { RegisterTypes } from './actions';
import { otpPhoneNumber } from '../../api/otp';
import history from '../../containers/App/history';

export function* registerSaga({ data }) {
  try {
    const response = yield call(otpPhoneNumber, data);
    console.log(response);
    const newResponse = {
      data: response.data,
    };
    yield put(RegisterActions.userRegisterSuccess(newResponse));
    history.push('/confirm'); //Redirect khong dc ne a :-(
  } catch (error) {
    console.log(error);
    yield put(RegisterActions.userRegisterFailure(error.data.message));
  }
}

const registerSagas = () => takeLatest(RegisterTypes.USER_REGISTER, registerSaga);

export default registerSagas;


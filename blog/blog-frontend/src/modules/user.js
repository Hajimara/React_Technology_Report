import { createAction, handleActions } from "redux-actions";
import { takeLatest,call } from "redux-saga/effects";
import * as authApi from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes
} from "../lib/createRequestSaga";

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
const [CHECK, CHECK_SUCCESS, CHECK_FAUILURE] = createRequestActionTypes(
    'user/CHECK'
);
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, user=> user);
export const check = createAction(CHECK);
export const logout= createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authApi.check);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user'); // localStorage에서 user를 제거
    } catch (error) {
        console.log('localStorage is not working');
        
    }
}// 함수내부에서 yield를 사용하지 않으므로 제너레이터함수 선언이 불필요

function* logoutSaga() {
    try {
        yield call(authApi.logout);
        localStorage.removeItem('user');
    } catch (error) {
        console.log(error);
        
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAUILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    user: null,
    checkError: null,
}

export default handleActions(
    {
        [LOGOUT]: (state) => ({
            ...state,
            user:null
        }),
        [TEMP_SET_USER]: (state, {payload: user}) => ({
            ...state,
            user
        }),
        [CHECK_SUCCESS]: (state, {payload: user}) => ({
            ...state,
            user,
            checkError: null
        }),
        [CHECK_FAUILURE]: (state, {payload: error}) => ({
            ...state,
            user: null,
            checkError: error
        }),
    }
    ,initialState
)
import {call, put} from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading'

export default function createRequestSaga(type, request){
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function*(action){
        yield put(startLoading(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data
              })// 특정 액션 디스패치
            } catch (error) {
              yield put({
                type: FAILURE,
                error: true,
                payload: error
              })
            }
            yield put(finishLoading(type))// 로딩 완료
    }

}
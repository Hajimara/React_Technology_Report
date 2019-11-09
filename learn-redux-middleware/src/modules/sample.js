import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입은 한 요청당 세개를 만든다.
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";



export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST)) //로딩 시작
//   // call을 사용하면 Promise를 반환하는 함수를 호출하고 기다릴 수 있다.
//   // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
//   try {
//     const post = yield call(api.getPost, action.payload);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data
//     })// 특정 액션 디스패치
//   } catch (error) {
//     yield put({
//       type: GET_POST_FAILURE,
//       error: true,
//       payload: error
//     })
//   }
//   yield put(finishLoading(GET_POST))// 로딩 완료
// }

// function* getUsersSaga(action) {
//   yield put(startLoading(GET_USERS)) //로딩 시작
//   // call을 사용하면 Promise를 반환하는 함수를 호출하고 기다릴 수 있다.
//   // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
//   try {
//     const users = yield call(api.getUsers);
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: users.data
//     })// 특정 액션 디스패치
//   } catch (error) {
//     yield put({
//       type: GET_USERS_FAILURE,
//       error: true,
//       payload: error
//     })
//   }
//   yield put(finishLoading(GET_USERS))// 로딩 완료
// }

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}
// thunk 함수를 생성한다.
// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers= createRequestThunk(GET_USERS, api.getUsers);
// 
// export const getPost = id => async dispatch => {
//   dispatch({
//     type: GET_POST
//   }); // 요청 시작을 알린다.
//   try {
//     const response = await api.getPost(id);
//     dispatch({ type: GET_POST_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: error,
//       error: true
//     });
//     throw error; // 컴포넌트 단에서 에러를 확인할 수 있게 해준다.
//   }
// };

// export const getUsers = () => async dispatch => {
//   dispatch({
//     type: GET_USERS
//   });
//   try {
//     const response = await api.getUser();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: error,
//       error: true
//     });
//     throw error;
//   }
// };

// 초기 상태를 선언
const initalState = {
  post: null,
  users: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload
    }),
  },
  initalState
);

export default sample;

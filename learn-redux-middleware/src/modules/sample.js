import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

// 액션 타입은 한 요청당 세개를 만든다.
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수를 생성한다.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers= createRequestThunk(GET_USERS, api.getUsers);

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

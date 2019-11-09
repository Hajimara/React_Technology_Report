import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREMENT_ASYNC = "counter/INCREMENT_ASYNC";
const DECREMENT_ASYNC = "counter/DECREMENT_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록 () => undefined 를 두번째 파라미터로 넣어줌
export const increaseAsync = createAction(INCREMENT_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREMENT_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다린다.
  yield put(increase()); //특정 액션을 디스패치한다.
}
function* decreaseSaga() {
  yield delay(1000); // 1초를 기다린다.
  yield put(decrease()); //특정 액션을 디스패치한다.
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
  yield takeEvery(INCREMENT_ASYNC, increaseSaga);
  // takeEvery는 기존에 진행 중이던 작업이 있다면 취소 처리하고,
  // 가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(DECREMENT_ASYNC, decreaseSaga);
}
// // 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
// export const increaseAsync = () => dispatch => { // Thunk 생성 함수
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// }
// export const decreaseAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// }

const initalState = 0;

const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },
  initalState
);

export default counter;

import { createAction, handleActions } from "redux-actions";
// 액션 타입 정의
/**
 * 액션타입은 대문자로 정의하고 문자열 내용은 모듈/액션 이름과 같은 형태로 작성한다.
 */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성 함수
/**
 * export와 export default의 차이점은
 * export는 여러개를 내보낼 수 있지만
 * export default 는 단 한개만 내보낼 수 있다.
 * 여기서 액션 생성 함수는 export를 사용하고
 * 리듀서는 export default를 사용한다.
 */

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기 상태
const initalState = {
  number: 0
};

// 리듀서
/**
 * 리듀서엔 현재상태를 참조하여 새로운 객체를 생성해서
 * 반환하는 코드를 작성했다.
 */
// function counter(state = initalState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1
//       };
//     default:
//       return state;
//   }
// }

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
  },
  initalState
);

export default counter;

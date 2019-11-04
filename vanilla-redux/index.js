import { createStore } from "redux";

// Dom reference
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// action type, action creator
/* 액션 이름은 문자열 형태, 주로 대문자로 작성하며 액션 이름은 고유해야 한다. */
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

/* 액션 객체는 type을 무조건 가지고 있어야 한다. 그 외의 값은 마음대로 넣을 수 있다.*/
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 함수 선언, state가 undefined일 경우 initialState 값을 기본으로 설정

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

// 스토어 만들기, 파라미터로는 리듀서 함수를 넣는다.
const store = createStore(reducer);

// 이 함수는 상태가 업데이트 될 때마다 호출되며 리액트의 render 함수와는
// 다르게 이미 html을 사용하여 만들어진 UI 속성을 상태에 따라 변경 해준다.
const render = () => {
  const state = store.getState(); // 현재 상태를 불러온다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

store.subscribe(render);

// 액션 발생시키기 -> 디스패치
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};

import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 액션 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수
// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input
// });
// let id = 3;
// export const insert = text => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false
//   }
// });
// export const toggle = id => ({
//   type: TOGGLE,
//   id
// });
// export const remove = id => ({
//   type: REMOVE,
//   id
// });

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
// 초기 상태
const initalState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 공부하기",
      done: true
    },
    {
      id: 2,
      text: "리덕스 공부 안하기",
      done: false
    }
  ]
};

// 리듀스 함수
// function todos(state = initalState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo)
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         )
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id)
//       };

//     default:
//       return state;
//   }
// }

// const todos = handleActions({
//   [CHANGE_INPUT]: (state, {payload:input}) => ({ ...state, input: input }),
//   [INSERT]: (state, {payload:todo}) => ({
//     ...state,
//     todos: state.todos.concat(todo)
//   }),
//   [TOGGLE]: (state, {payload:id}) => ({
//     ...state,
//     todos: state.todos.map(todo =>
//       todo.id === id ? { ...todo, done: !todo.done } : todo
//     )
//   }),
//   [REMOVE]: (state, {payload:id}) => ({
//     ...state,
//     todos: state.todos.filter(todo => todo.id !== id)
//   })
// },initalState);

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        // 첫번 째 함수는 수정하고 싶은 상태, 두번 째 함수는 변형 시키고 싶은 업데이트 함수
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) => 
    produce(state, draft=> {
      const todo = draft.todos.find(todo=> todo.id ===id);
      todo.done = !todo.done;
    }),
    [REMOVE]: (state, { payload: id }) => 
    produce(state,draft=>{
      const index = draft.todos.findIndex(todo=> todo.id === id);
      draft.todos.splice(index,1)
    })
  },
  initalState
);

export default todos;

import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  remove,
  toggle
}) => {
  return <Todos
  input={input}
  todos={todos}
  onChangeInput={changeInput}
  onInsert={insert}
  onRemove={remove}
  onToggle={toggle}
  ></Todos>;
};

export default connect(
    // 비구조화 할당을 통해 todos를 통해
    // 분리하여 state.todos.input 대신 todos.input을 사용
    // {todos} = state
    ({todos}) => ({ // 스토어 안의 상태를 컴포넌트의 props로 넘겨주낟.
        input:todos.input,
        todos:todos.todos,
    }),
    { // 스토어 안의 액션 생성 함수를 컴포넌트의 props로 넘겨준다.
        changeInput,
        insert,
        remove,
        toggle
    }
)(TodosContainer);

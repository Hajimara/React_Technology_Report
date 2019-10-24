import React, { useState, useCallback } from 'react';
import '../styles/TodoInsert.scss'
import { IoMdAdd } from "react-icons/io";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []); // 렌더링 후 단 한번만 함수 생성 

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');

        // 새로고침 방지
        e.preventDefault();
    }, [onInsert, value]);
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input onChange={onChange} vlaue={value} placeholder='일정을 입력하세요' />
            <button type='submit'>
                <IoMdAdd />
            </button>
        </form>
    );
}
export default TodoInsert;
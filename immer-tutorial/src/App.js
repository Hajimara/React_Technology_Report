import React, { useRef, useState, useCallback } from 'react';
import produce from 'immer';

const App = () => {
  const nextid = useRef(1); // 로컬 변수 사용
  const [form, setForm] = useState({ naem: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        // ...form,
        // [name]: [value]
        produce(draft => { // 수정하고 싶은 상태, 함수형 업데이트 
          draft[name] = value;
        })
      )
    }
    , []);

  //form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextid.current,
        name: form.name,
        username: form.username
      };

      setData(
        //   {
        //   ...data,
        //   array: data.array.concat(info)
        // }
        produce(draft => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextid.current += 1;

    }, [form.name, form.username]);

  const onRemove = useCallback(
    (id) => {
      setData(
        // {
        //   ...data,
        //   array: data.array.filter(info => info.id !== id)
        // }
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      )
    }
    , []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default App;

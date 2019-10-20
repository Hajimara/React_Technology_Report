import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '하늘' },
        { id: 2, text: '별' },
        { id: 3, text: '땅' },
        { id: 4, text: '얍' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
        setInputText('');
    }
    const nameList = names.map((name) =>
        <li key={name.id}
            onDoubleClick={() => onRemove(name.id)}
        >{name.text}</li>);
    return (
        <div>
            <input onChange={onChange} value={inputText}></input>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    )
}

export default IterationSample;
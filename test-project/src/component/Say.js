import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('Hi!');
    const onClickLeaver = () => setMessage('Bye!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>안녕</button>
            <button onClick={onClickLeaver}>잘가</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'tomato' }} onClick={() => setColor('tomato')}>토마토</button>
            <button style={{ color: 'aqua' }} onClick={() => setColor('aqua')}>아쿠아</button>
            <button style={{ color: 'yellow' }} onClick={() => setColor('yellow')}>노란색</button>
        </div>
    );
}

export default Say;
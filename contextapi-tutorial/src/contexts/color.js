import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: "tomato", subcolor: 'skyblue' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { }
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('tomato');
    const [subcolor, setSubcolor] = useState('skyblue');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    }
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )

}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
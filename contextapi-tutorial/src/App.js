import React from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColor from './components/SelectColor';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor></SelectColor>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

export default App;

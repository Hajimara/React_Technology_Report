import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'indigo'];

class SelectColor extends Component {
    static contextType = ColorContext;

    handleSetColor = (color) => {
        this.context.actions.setColor(color);
    }
    handleSetSubcolor = (Subcolor) => {
        this.context.actions.setSubcolor(Subcolor);
    }
    render() {
        return (
            <div>
                <h2>
                    색상 선택하기
                </h2>
                {colors.map((color) => (
                    <div key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.handleSetColor(color)}
                        onContextMenu={e => {
                            e.preventDefault();
                            this.handleSetSubcolor(color);
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default SelectColor;
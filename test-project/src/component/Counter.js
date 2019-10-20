import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    };

    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={(prevState) => {
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }),
                            () => {
                                console.log('dd');
                            }
                        );
                    }}
                >버튼</button>
            </div>
        );
    }
}

export default Counter;
import React, { Component } from 'react';

class HistorySample extends Component {

    handleGoBack = () => {
        this.props.history.goBack();
    }

    handleGoHome = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        // 페이지에 변화가 생기려고 할 때 마다 물어본다.
        this.unblock = this.props.history.block('진짜 가시게요?');
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트 되면 질문을 멈춤
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        )
    }
}

export default HistorySample;
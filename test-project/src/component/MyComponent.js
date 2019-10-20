import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name, children } = this.props;
        return (
            <>
                <div className="react" > {name} 입니다.</div>
                <div>{children}</div>
            </>)
    }

};
MyComponent.defaultProps = {
    name: "기본 이름"
}

MyComponent.propTypes = {
    name: PropTypes.string
}
export default MyComponent;
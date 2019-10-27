import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';


const data = {
    velopert: {
        name: '박수진',
        description: '리액트를 배우는 개발자'
    },
    library: {
        name: '리액트',
        description: '개발자를 배우는 리액트'
    }
}

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    )
}

export default withRouter(Profile);
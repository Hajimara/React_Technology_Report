import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정으로 문자열 맨 앞 ? 표시를 생략한다.
    });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터의 기초를 살펴보는 프로젝트이다.</p>
            {showDetail && <p>detail 값을 true로 설정하였습니다.</p>}
        </div>
    )
}

export default About;
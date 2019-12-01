import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Responsive from "./Responsive";
import { Link } from "react-router-dom";
/**
 *
 */

const HeaderStyled = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /** 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

// 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타내도록 해 주는 컴포넌트
const Spacer = styled.div`
  height: 4.5rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;
const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderStyled>
        <Wrapper>
          <Link className="logo" to="/">
            REACTERS
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderStyled>
      <Spacer />
    </>
  );
};

export default Header;

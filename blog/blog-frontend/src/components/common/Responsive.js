import React from "react";
import styled from "styled-components";

const ResponsiveStyled = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0; /** 중앙정렬 */
  /* @media (max-width: 1920px){
    width: 1024px;
  } */
  @media (max-width: 1024px){
    width: 768px;
  }
  @media (max-width: 768px){
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를'
  // ...rest로 받아 ResponsiveStyled에 전달
  return <ResponsiveStyled {...rest}>{children}</ResponsiveStyled>;
};

export default Responsive;

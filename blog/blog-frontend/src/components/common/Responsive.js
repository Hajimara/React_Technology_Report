import React from "react";
import styled from "styled-components";

const ResponsiveStyled = styled.div``;

const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를'
  // ...rest로 받아 ResponsiveStyled에 전달
  return <ResponsiveStyled {...rest}>{children}</ResponsiveStyled>;
};

export default Responsive;

import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";


const StyledButton = styled.button`
    border:none; 
    border-radius:4px;
    font-size:1rem;
    font-weight:bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gary[8]};
    &:hover {
        background: ${palette.gary[6]}
    }
  `;
const Button = props => {
    // console.log(`globalButton : ${props}`);
  return (
      <StyledButton {...props}></StyledButton>
  )
};

export default Button;
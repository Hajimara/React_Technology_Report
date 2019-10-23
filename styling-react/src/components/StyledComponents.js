import React from 'react';
import styled, { css } from 'styled-components';
const sizes = {
    desktop: 1024,
    tablet: 768
};

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;

    return acc;
}, {});

const Box = styled.div`
    background: ${props => props.color || 'black'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
    background:white;
    color:black;
    border-radius: 4px;
    padding: 0.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255,255,255,0.9);
    }

    ${props =>
        props.inverted &&
        css`
        background: none; /* 투명 */
        border: 2px solid white;
        color: white;

        &:hover{
            background:white;
            color:black;
        }
    `};
    & + button { /* button 사이사이에 적용*/
        margin-left:1rem;
    }
`;

const StyledComponent = () => {
    return (
        <Box>
            <Button>버튼</Button>
            <Button inverted={true}>버튼 테두리만</Button>
        </Box>
    )
}

export default StyledComponent;
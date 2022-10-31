import React from 'react';
import styled from 'styled-components';

const StyledConsole = styled.textarea<PropsType>`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${({color}) => color || 'white'};
  resize: none;

  &:focus {
    outline: none;
  }
`

type PropsType = {
    color?: string
}

export const Console = (props: PropsType) => {
    return <StyledConsole {...props}/>
};
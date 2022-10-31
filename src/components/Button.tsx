import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const rotateAnimation = keyframes`
    0%{
      transform: rotateZ(0deg);
    }
  100%{
    transform: rotateZ(360deg);
  }
`

const StyledButton = styled.button.attrs((props) =>({
    outline: true,
}))<PropsType>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  align-self: ${({alignSelf}) => alignSelf || 'stretch'};

  &:focus {
    outline: none;
  }
  
  &:hover{
    animation: ${rotateAnimation} 1s;
  }

  ${props => props.primary && css<PropsType>`
    color: ${({color}) => color || 'white'};
    background: ${({background}) => background || 'white'};
  `}
  ${props => props.outline && css<PropsType>`
    border: 1px solid ${({color}) => color || 'white'};
    color: ${({color}) => color || 'white'};
    background: transparent;
  `}
`

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`

type PropsType = {
    children: React.ReactNode
    alignSelf?: string
    primary?: boolean
    outline?: boolean
    color?: string
    background?: string
    border?: string
    size?: 'large' | 'default'
}

export const Button = (props: PropsType) => {
    return <>{
        props.size === 'large'
            ? <LargeButton {...props}/>
            : <StyledButton {...props}/>
    }</>
};
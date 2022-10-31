import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div<PropsType>`
  font-size: 24px;
  color: ${({color}) => color || 'white'};
`
type PropsType = {
    children: React.ReactNode
    color?: string
}

export const Line = (props: PropsType) => {
    return <StyledLine {...props}/>
};
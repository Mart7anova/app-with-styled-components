import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div<PropsType>`
  color: ${props => props.color};
`

type PropsType = {
    children: React.ReactNode
    color: string
}

export const Title = (props: PropsType) => {
    return <StyledTitle {...props}/>
};

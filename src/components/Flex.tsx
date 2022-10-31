import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div<PropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItem || 'stretch'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  margin: ${props => props.margin};
`

type PropsType = {
    children: React.ReactNode
    flexDirection?: string
    alignItem?: string
    justifyContent?: string
    margin?: string
}

export const Flex = (props: PropsType) => {
    return <StyledFlex {...props}/>
};
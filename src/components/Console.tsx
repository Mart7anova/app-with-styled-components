import React, {KeyboardEvent, useState} from 'react';
import styled from 'styled-components';
import {Flex} from './Flex';
import {Line} from './Line';

const StyledConsole = styled.textarea<PropsType>`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${props => props.color || props.theme.colors.primary};
  resize: none;

  &:focus {
    outline: none;
  }
`

type PropsType = {
    color?: string
}

export const Console = ({color, ...props}: PropsType) => {
    const [lines, setLines] = useState(['C:/User>'])

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.charCode === 13){
            setLines([...lines, 'C:/User>'])
        }
    }

    return <Flex>
        <Flex flexDirection={'column'} margin={'0 10px'}>
            {lines.map(line =>
                <Line color={color}>{line}</Line>
            )}
        </Flex>
        <StyledConsole color={color} {...props} onKeyPress={onKeyPressHandler}/>
    </Flex>
};
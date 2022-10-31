import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Title} from './components/Title';
import {Flex} from './components/Flex';
import {Console} from './components/Console';
import {Button} from './components/Button';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

function App() {
    return (
        <AppWrapper>
            <Flex justifyContent={'center'}>
                <Title>Hello</Title>
            </Flex>
            <Flex flexDirection={'column'} margin={'10px 0'}>
                <Console />
                <Button alignSelf={'flex-end'}>Sent</Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;

import React, { Component } from 'react'
import Synth from './Synth'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Orbitron', sans-serif;
  }
`

const Background = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #959595 0%,
    #0d0d0d 46%,
    #010101 50%,
    #0a0a0a 53%,
    #4e4e4e 76%,
    #383838 87%,
    #1b1b1b 100%
  );
`

class App extends Component {
  render() {
    return (
      <Background>
        <GlobalStyles />
        <Synth />
      </Background>
    )
  }
}

export default App

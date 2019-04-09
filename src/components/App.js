import React, { Component } from 'react'
import Synth from './Synth'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body,
  button,
  select,
  select > option {
    font-family: 'Orbitron', sans-serif !important;
  }

  button.active,
  #arp-start.active {
    background-color: #ffaf37 !important;
    color: #fff !important;
  }
`

const Background = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
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

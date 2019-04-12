import React, { Component } from 'react'
import Synth from './Synth/Synth'
import InstructionOverlay from './Overlay/InstructionOverlay'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body,
  button,
  select,
  select > option {
    font-family: 'Orbitron', sans-serif !important;
  }

  #arp-start {
    background: #cacbcd;
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
  state = { active: false }

  onClick = () => {
    this.setState({ active: true })
  }

  render() {
    return (
      <Background>
        <GlobalStyles />
        <button onClick={this.onClick} />
        <InstructionOverlay isActive={this.state.active} />
        <Synth />
      </Background>
    )
  }
}

export default App

import React, { Component } from 'react'
import Synth from './Synth/Synth'
import InstructionOverlay from './Overlay/InstructionOverlay'

import styled, { createGlobalStyle } from 'styled-components'
import { Info } from 'styled-icons/material/Info'

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

const InstructionButton = styled(Info)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  z-index: 11;
  color: #ffaf37;
`

class App extends Component {
  state = { active: false }

  onClick = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <Background>
        <GlobalStyles />
        <InstructionButton onClick={this.onClick} />
        <InstructionOverlay isActive={this.state.active} />
        <Synth />
      </Background>
    )
  }
}

export default App

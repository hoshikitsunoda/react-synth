import React from 'react'

import styled from 'styled-components'

const Overlay = styled.div`
  display: block;
  // visibility: ${props => (props.isActive ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: ${props => (props.isActive ? '100vh' : '0')};
  position: fixed;
  z-index: 10;
  transition: 0.3s;
`

const InstructionOverlay = props => {
  return <Overlay isActive={props.isActive} />
}

export default InstructionOverlay

import React from 'react'

import styled from 'styled-components'

const Overlay = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
`

const InstructionOverlay = props => {
  console.log(props.isActive)
  return <Overlay isActive={props.isActive} />
}

export default InstructionOverlay

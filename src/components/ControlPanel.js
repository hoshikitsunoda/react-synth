import React from 'react'
import Arpeggiator from './Arpeggiator'
import MonoPoly from './MonoPoly'

const ControlPanel = props => {
  return (
    <div>
      <Arpeggiator sendData={props.sendData} sequencer={props.sequencer} />
      <MonoPoly changeVoice={props.changeVoice} />
    </div>
  )
}

export default ControlPanel

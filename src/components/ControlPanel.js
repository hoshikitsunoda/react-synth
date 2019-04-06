import React from 'react'
import Arpeggiator from './Arpeggiator'
import MonoPoly from './MonoPoly'
import SynthType from './SynthType'

const ControlPanel = props => {
  return (
    <div>
      <Arpeggiator sendData={props.sendData} sequencer={props.sequencer} />
      <MonoPoly changeVoice={props.changeVoice} synthVoice={props.synthVoice} />
      <SynthType
        changeSynthType={props.changeSynthType}
        synthVoice={props.synthVoice}
        synthChange={props.synthChange}
      />
    </div>
  )
}

export default ControlPanel

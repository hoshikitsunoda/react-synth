import React from 'react'
import Arpeggiator from './Arpeggiator'
import MonoPoly from './MonoPoly'
import SynthType from './SynthType'

const ControlPanel = props => {
  return (
    <div>
      <Arpeggiator sendData={props.sendData} sequencer={props.sequencer} />
      <MonoPoly changeVoice={props.changeVoice} />
      <SynthType
        changeSynthType={props.changeSynthType}
        synthVoiceType={props.synthVoiceType}
      />
    </div>
  )
}

export default ControlPanel

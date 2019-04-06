import React from 'react'
import Arpeggiator from './Arpeggiator'
import MonoPoly from './MonoPoly'
import SynthType from './SynthType'
import OctaveChange from './OctaveChange'

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
      <OctaveChange />
    </div>
  )
}

export default ControlPanel

import React from 'react'
import Arpeggiator from './Arpeggiator'
import MonoPoly from './MonoPoly'
import SynthType from './SynthType'
import OctaveChange from './OctaveChange'

const ControlPanel = props => {
  const {
    sendData,
    sequencer,
    changeVoice,
    synthVoice,
    changeSynthType,
    synthChange,
    octaveChange
  } = props

  return (
    <div>
      <Arpeggiator sendData={sendData} sequencer={sequencer} />
      <MonoPoly changeVoice={changeVoice} synthVoice={synthVoice} />
      <SynthType
        changeSynthType={changeSynthType}
        synthVoice={synthVoice}
        synthChange={synthChange}
      />
      <OctaveChange octaveChange={octaveChange} />
    </div>
  )
}

export default ControlPanel

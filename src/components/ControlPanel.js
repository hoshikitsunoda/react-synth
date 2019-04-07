import React from 'react'
import Arpeggiator from './Arpeggiator'
import MonoPoly from './MonoPoly'
import SynthType from './SynthType'
import OctaveChange from './OctaveChange'
import BPMCounter from './BPMCounter'

const ControlPanel = props => {
  const {
    sendNoteLength,
    sequencer,
    changeVoice,
    synthVoice,
    changeSynthType,
    synthChange,
    octaveChange,
    bpmChange,
    arpeggiatorNoteChange
  } = props

  return (
    <div>
      <Arpeggiator
        sendNoteLength={sendNoteLength}
        arpeggiatorNoteChange={arpeggiatorNoteChange}
        sequencer={sequencer}
      />
      <MonoPoly changeVoice={changeVoice} synthVoice={synthVoice} />
      <SynthType
        changeSynthType={changeSynthType}
        synthVoice={synthVoice}
        synthChange={synthChange}
      />
      <OctaveChange octaveChange={octaveChange} />
      <BPMCounter bpmChange={bpmChange} />
    </div>
  )
}

export default ControlPanel

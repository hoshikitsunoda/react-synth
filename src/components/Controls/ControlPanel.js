import React from 'react'
import Arpeggiator from '../Arpeggiator/Arpeggiator'
import MonoPoly from './MonoPoly'
import SynthType from './SynthType'
import OctaveChange from './OctaveChange'
import BPMCounter from './BPMCounter'

import { ControlPanelWrap, Controls } from '../styles'

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
    <ControlPanelWrap>
      <Arpeggiator
        sendNoteLength={sendNoteLength}
        arpeggiatorNoteChange={arpeggiatorNoteChange}
        sequencer={sequencer}
      />
      <Controls>
        <MonoPoly changeVoice={changeVoice} synthVoice={synthVoice} />
        <SynthType
          changeSynthType={changeSynthType}
          synthVoice={synthVoice}
          synthChange={synthChange}
        />
        <OctaveChange octaveChange={octaveChange} />
        <BPMCounter bpmChange={bpmChange} />
      </Controls>
    </ControlPanelWrap>
  )
}

export default ControlPanel

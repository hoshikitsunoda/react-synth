import React from 'react'

import {
  Overlay,
  InstructionBox,
  TextBoxWrap,
  NoteLengthTextBox,
  ArpInstructionBox,
  ArpNotesWrap,
  ArpOctaveWrap,
  ArpButtonWrap,
  KeyboardSettingWrap,
  KeyboardSetting
} from '../styles'

const InstructionOverlay = props => {
  return (
    <Overlay isActive={props.isActive}>
      <InstructionBox isActive={props.isActive}>
        <TextBoxWrap>
          <NoteLengthTextBox>
            <p>Arpeggiator Note Length:</p>
            <p>Controls the length of arpeggiator notes being played.</p>
          </NoteLengthTextBox>
          <ArpInstructionBox>
            <ArpNotesWrap>
              <p>Arpeggiator Notes:</p>
              <p>
                8 step arpeggiator. <br /> Specify the notes and it will play in
                order.
              </p>
            </ArpNotesWrap>
            <ArpOctaveWrap>
              <p>Arpeggiator Octave</p>
            </ArpOctaveWrap>
            <ArpButtonWrap>
              <p>Start Arp</p>
            </ArpButtonWrap>
          </ArpInstructionBox>
          <KeyboardSettingWrap>
            <KeyboardSetting>
              <p>Mono / Poly Switch</p>
            </KeyboardSetting>
            <KeyboardSetting>
              <p>Change Synth Type</p>
            </KeyboardSetting>
            <KeyboardSetting>
              <p>Keyboard Octave</p>
            </KeyboardSetting>
            <KeyboardSetting>
              <p>BPM</p>
            </KeyboardSetting>
          </KeyboardSettingWrap>
        </TextBoxWrap>
      </InstructionBox>
    </Overlay>
  )
}

export default InstructionOverlay

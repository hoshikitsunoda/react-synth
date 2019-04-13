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
  KeyboardSetting,
  KeyboardTextWrap,
  KeyboardInstructionText,
  KeyboardMappingWrap,
  Key
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
          <KeyboardTextWrap>
            <KeyboardInstructionText>
              These keyboards correspond to your computer keyboards as follow:
            </KeyboardInstructionText>
            <KeyboardMappingWrap>
              <Key>a</Key>
              <Key>w</Key>
              <Key>s</Key>
              <Key>e</Key>
              <Key>d</Key>
              <Key>f</Key>
              <Key>t</Key>
              <Key>g</Key>
              <Key>y</Key>
              <Key>h</Key>
              <Key>u</Key>
              <Key>j</Key>
              <Key>k</Key>
            </KeyboardMappingWrap>
          </KeyboardTextWrap>
        </TextBoxWrap>
      </InstructionBox>
    </Overlay>
  )
}

export default InstructionOverlay

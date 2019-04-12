import React from 'react'

import styled from 'styled-components'

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  transition: 0.3s;
  opacity: ${props => (props.isActive ? 1 : 0)};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: opacity 1s, visibility 1s;
`

const InstructionBox = styled.div`
  opacity: ${props => (props.isActive ? 1 : 0)};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  max-width: 50rem;
  min-width: 50rem;
  height: 100%;
  max-height: 29rem;
  margin: 0 auto;
  background: linear-gradient(
    to bottom,
    rgba(42, 49, 50, 0.7),
    rgba(42, 49, 50, 0.3)
  );
  border-radius: 1rem;
  transition: opacity 1s, visibility 1s;
`

const TextBoxWrap = styled.div`
  color: #fff;
  letter-spacing: 0.2rem;
`
const NoteLengthTextBox = styled.div`
  padding: 0.5rem;
  letter-spacing: 0.2rem;
  border: 3px solid #ffaf37;
  border-bottom: none;
  transition: 0.3s;
  & p {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }
  &:hover p {
    opacity: 0.8;
    visibility: visible;
  }
`

const ArpInstructionBox = styled.div`
  display: flex;
`

const ArpNotesWrap = styled.div`
  width: 80%;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
  transition: 0.3s;
  & p {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }
  &:hover p {
    opacity: 0.8;
    visibility: visible;
  }
`

const ArpOctaveWrap = styled.div`
  width: 22%;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
  border-left: none;
  text-align: center;
  transition: 0.3s;
  & p {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }
  &:hover p {
    opacity: 0.8;
    visibility: visible;
  }
`

const ArpButtonWrap = styled.div`
  width: 15%;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
  border-left: none;
  text-align: center;
  transition: 0.3s;
  & p {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }
  &:hover p {
    opacity: 0.8;
    visibility: visible;
  }
`

const KeyboardSettingWrap = styled.div`
  display: flex;
  height: 5rem;
`

const KeyboardSetting = styled.div`
  width: 25%;
  text-align: center;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
  border-top: none;
  border-left: none;
  &:first-child {
    border-left: 3px solid #ffaf37;
  }
  transition: 0.3s;
  & p {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }
  &:hover p {
    opacity: 0.8;
    visibility: visible;
  }
`

const InstructionOverlay = props => {
  return (
    <Overlay isActive={props.isActive}>
      <InstructionBox isActive={props.isActive}>
        <TextBoxWrap>
          <NoteLengthTextBox>
            <p>Arpeggiator Note Length:</p>
            <p>Controls the length of arpeggiator notes being played</p>
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

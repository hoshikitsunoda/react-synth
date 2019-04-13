import styled from 'styled-components'
import { CaretDown } from 'styled-icons/fa-solid/CaretDown'

export const SynthBody = styled.div`
  flex: 1;
  max-width: 50rem;
  min-width: 50rem;
  margin: 0 auto;
  background: linear-gradient(
    to bottom,
    rgba(51, 107, 135, 0.3),
    rgba(42, 49, 50, 0.01)
  );
  border-radius: 1rem;
  -webkit-box-shadow: 0 14px 18px -10px #9d9c9c;
  -moz-box-shadow: 0 14px 18px -10px #9d9c9c;
  box-shadow: 0 14px 18px -10px #9d9c9c;
  border: 3px groove;
  overflow: hidden;
  filter: ${props => (props.isActive ? 'blur(3px)' : 'none')};
`

export const SequenceWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 0.2rem groove;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
`

export const LengthIndicatorBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.2rem groove;
  padding: 0.8rem 0;
  background-color: rgba(0, 0, 0, 0.15);
`
export const LengthIndicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border: 0.3rem groove;
  border-radius: 0.3rem;
  width: 7rem;
  background-color: rgba(0, 0, 0, 0.6);
`

export const IndicatorLabel = styled.label`
  color: #aaa;
  font-weight: bold;
  transition: 0.3s;
  margin-top: 0.3rem;
`

export const Indicator = styled.input`
  margin-right: 0.5rem;
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 0.2rem groove #cacece;
  padding: 0.7rem;
  border-radius: 0.3rem;
  outline: none;

  &:checked + ${IndicatorLabel} {
    color: #ffaf37;
  }

  &:checked {
    background-color: #ffaf37;
    border: 0.2rem groove;
  }
`

export const NoteIndicatorOuterWrap = styled.div`
  display: flex;
  align-items: center;
`

export const NoteIndicatorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const NoteIndicator = styled.select`
  -webkit-appearance: none;
  background-color: #303233;
  color: #ffaf37;
  padding: 0.5rem 0.7rem 0.2rem 0.5rem;
  margin-right: 0.3rem;
  border: 0.1rem groove;
  font-weight: bold;
  outline: none;
`

export const SelectArrow = styled(CaretDown)`
  color: #ffaf37;
  position: absolute;
  z-index: 1;
  width: 0.7rem;
  right: 0.8rem;
  pointer-events: none;
`

export const SynthTypeIndicator = styled.select`
  -webkit-appearance: none;
  width: 10rem;
  background-color: #303233;
  color: #ffaf37;
  padding: 0.5rem 1.7rem 0.2rem 0.5rem;
  margin-right: 0.3rem;
  border: 0.1rem groove;
  font-weight: bold;
  outline: none;
`

export const ControlPanelWrap = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 40%,
    rgba(0, 0, 0, 0.2) 100%
  );
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
`

export const ControlMeterWrap = styled.div`
  text-align: center;
`
export const LabelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem groove;
  padding-top: 0.25rem;
  background-color: #303233;
  color: #ffaf37;
`

export const IndicatorNumber = styled.div`
  width: 1.5rem;
  text-align: center;
`
export const KeyboardBox = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  margin: 0 auto;
  border: 0.4rem groove;
  border-radius: 0.7rem 0.7rem 0 0;
  border-bottom: none;
  border-top: 0.2rem groove;
`

export const KeyWrap = styled.div`
  width: calc(100% / 8);
  height: 12rem;
  border: 0.3rem solid #fff;
  border-radius: 0.3rem;
  background-color: rgba(136, 136, 136, 0.3);
  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(7),
  &:nth-child(9),
  &:nth-child(11) {
    background: #000;
    width: 3rem;
    position: absolute;
    height: 9rem;
  }
  &:nth-child(2) {
    left: 2.8rem;
  }
  &:nth-child(4) {
    left: 7rem;
  }
  &:nth-child(7) {
    left: 15.45rem;
  }
  &:nth-child(9) {
    left: 19.75rem;
  }
  &:nth-child(11) {
    left: 24rem;
  }
`

export const Input = styled.input`
  -webkit-appearance: none;
  background: #303233;
  border-radius: 1rem;
  border: 0.1rem groove;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0.2rem groove;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffaf37;
    cursor: pointer;
    box-shadow: 1px 1px 1px #ffaf37, 0px 0px 2px yellow;
  }
`

// Overlay style

export const Overlay = styled.div`
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
  transition: opacity 0.3s, visibility 0.3s;
`

export const InstructionBox = styled.div`
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
  transition: opacity 0.3s, visibility 0.3s;
`

export const TextBoxWrap = styled.div`
  color: #fff;
  letter-spacing: 0.2rem;
`
export const NoteLengthTextBox = styled.div`
  padding: 0.5rem;
  letter-spacing: 0.2rem;
  border: 3px solid #ffaf37;
  border-bottom: none;
`

export const ArpInstructionBox = styled.div`
  display: flex;
`

export const ArpNotesWrap = styled.div`
  width: 80%;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
`

export const ArpOctaveWrap = styled.div`
  width: 22%;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
  border-left: none;
  display: flex;
  align-items: center;
`

export const ArpButtonWrap = styled.div`
  width: 15%;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
  border-left: none;
  display: flex;
  align-items: center;
`

export const KeyboardSettingWrap = styled.div`
  display: flex;
  height: 5rem;
`

export const KeyboardSetting = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 3px solid #ffaf37;
  border-top: none;
  border-left: none;
  &:first-child {
    border-left: 3px solid #ffaf37;
  }
`

export const KeyboardTextWrap = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 1.4rem;
  border: 3px solid #ffaf37;
  border-top: none;
`

export const KeyboardInstructionText = styled.p`
  text-align: center;
  letter-spacing: 0.2rem;
`

export const KeyboardMappingWrap = styled.div`
  display: flex;
  width: 70%;
  height: 7rem;
  margin: 0 auto;
  position: relative;
`

export const Key = styled.div`
  position: absolute;

  &:first-child {
    bottom: 0;
    left: 2.3rem;
  }

  &:nth-child(2) {
    left: 4.34rem;
    bottom: 3rem;
  }

  &:nth-child(3) {
    left: 6.6rem;
    bottom: 0;
  }

  &:nth-child(4) {
    left: 9rem;
    bottom: 3rem;
  }

  &:nth-child(5) {
    left: 10.8rem;
    bottom: 0;
  }

  &:nth-child(6) {
    left: 15.1rem;
    bottom: 0;
  }

  &:nth-child(7) {
    left: 17.8rem;
    bottom: 3rem;
  }

  &:nth-child(8) {
    left: 19.1rem;
    bottom: 0;
  }

  &:nth-child(9) {
    right: 12.2rem;
    bottom: 3rem;
  }

  &:nth-child(10) {
    right: 10.7rem;
    bottom: 0;
  }

  &:nth-child(11) {
    right: 7.7rem;
    bottom: 3rem;
  }

  &:nth-child(12) {
    right: 6.5rem;
    bottom: 0;
  }

  &:last-child {
    right: 2rem;
    bottom: 0;
  }
`

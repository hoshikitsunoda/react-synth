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
    left: 2.85rem;
  }
  &:nth-child(4) {
    left: 7.3rem;
  }
  &:nth-child(7) {
    left: 16rem;
  }
  &:nth-child(9) {
    left: 20.35rem;
  }
  &:nth-child(11) {
    left: 24.8rem;
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

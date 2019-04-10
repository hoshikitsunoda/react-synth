import React, { Component } from 'react'

import styled from 'styled-components'

import { noteLengthValue } from '../constants/Constants'

const LengthIndicatorBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.2rem groove;
  padding: 0.8rem 0;
  background-color: rgba(0, 0, 0, 0.15);
`
const LengthIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border: 0.3rem groove;
  width: 7rem;
  background-color: rgba(0, 0, 0, 0.3);
`

const IndicatorLabel = styled.label`
  color: #aaa;
  font-weight: bold;
  transition: 0.3s;
  margin-top: 0.3rem;
`

const Indicator = styled.input`
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

class ArpeggiatorNoteLength extends Component {
  state = { noteLength: '' }

  handleNoteLengthUpdate = () => {
    this.props.sendNoteLength(this.state.noteLength)
  }

  handleSelectChange = event => {
    this.setState(
      { noteLength: event.target.value },
      this.handleNoteLengthUpdate
    )
  }

  render() {
    const noteLengthList = noteLengthValue.map((value, index) => {
      return (
        <LengthIndicator key={index}>
          <Indicator
            onChange={this.handleSelectChange}
            name="note-length"
            type="radio"
            value={value}
            defaultChecked={value === '8n' ? 'defaultChecked' : ''}
          />
          <IndicatorLabel htmlFor={value}>{`1/${value.slice(
            0,
            -1
          )}`}</IndicatorLabel>
        </LengthIndicator>
      )
    })

    return <LengthIndicatorBox>{noteLengthList}</LengthIndicatorBox>
  }
}

export default ArpeggiatorNoteLength

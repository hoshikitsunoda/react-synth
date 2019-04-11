import React, { Component } from 'react'

import {
  LengthIndicatorBox,
  LengthIndicators,
  IndicatorLabel,
  Indicator
} from '../styles'

import { noteLengthValue } from '../../constants/Constants'

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
        <LengthIndicators key={index}>
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
        </LengthIndicators>
      )
    })

    return <LengthIndicatorBox>{noteLengthList}</LengthIndicatorBox>
  }
}

export default ArpeggiatorNoteLength

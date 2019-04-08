import React, { Component } from 'react'

import { noteLengthValue } from '../constants/Constants'

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
        <div key={index}>
          <input
            onChange={this.handleSelectChange}
            name="note-length"
            type="radio"
            value={value}
            defaultChecked={value === '8n' ? 'defaultChecked' : ''}
          />
          <label htmlFor={value}>{`1/${value.slice(0, -1)}`}</label>
        </div>
      )
    })

    return <div>{noteLengthList}</div>
  }
}

export default ArpeggiatorNoteLength

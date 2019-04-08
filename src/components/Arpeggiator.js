import React, { Component } from 'react'
import ArpeggiatorSequence from './ArpeggiatorSequence'
import ArpeggiatorOctaveMeter from './ArpeggiatorOctaveMeter'

import { noteLengthValue } from '../constants/Constants'

class Arpeggiator extends Component {
  state = { noteLength: '', active: false, steps: [], octave: 3 }

  handleNoteLengthUpdate = () => {
    this.props.sendNoteLength(this.state.noteLength)
  }

  handleSelectChange = event => {
    this.setState(
      { noteLength: event.target.value },
      this.handleNoteLengthUpdate
    )
  }

  handleSequenceInput = steps => {
    this.setState({ steps: steps }, this.handleArpeggiatorNoteUpdate)
  }

  handleArpeggiatorOctave = octave => {
    this.setState({ octave: octave }, this.handleSequenceInput)
  }

  onClick = () => {
    const isActive = this.state.active
    this.setState({ active: !isActive })
    this.props.sequencer()
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

    return (
      <div>
        <div className="noteLength">{noteLengthList}</div>
        <ArpeggiatorSequence
          arpeggiatorNoteChange={this.props.arpeggiatorNoteChange}
          octave={this.state.octave}
        />
        <ArpeggiatorOctaveMeter
          arpeggiatorOctave={this.handleArpeggiatorOctave}
        />
        <button
          onClick={this.onClick}
          className={`ui toggle button ${this.state.active ? ' active' : ''}`}
        >
          Arp
        </button>
      </div>
    )
  }
}

export default Arpeggiator

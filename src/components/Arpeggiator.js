import React, { Component } from 'react'
import ArpeggiatorOctaveMeter from './ArpeggiatorOctaveMeter'

import { notes, noteLengthValue } from '../constants/Constants'

class Arpeggiator extends Component {
  state = { noteLength: '', active: false, steps: [], octave: 3 }
  sequenceNotes = []

  handleNoteLengthUpdate = () => {
    this.props.sendNoteLength(this.state.noteLength)
  }

  handleArpeggiatorNoteUpdate = () => {
    this.props.arpeggiatorNoteChange(this.state.steps)
  }

  handleSelectChange = event => {
    this.setState(
      { noteLength: event.target.value },
      this.handleNoteLengthUpdate
    )
  }

  handleSequenceInput = () => {
    const steps = []
    this.sequenceNotes.forEach(item => {
      steps.push(item.value)
    })
    this.setState({ steps: steps }, this.handleArpeggiatorNoteUpdate)
  }

  handleArpeggiatorOctave = octave => {
    this.setState({ octave: octave })
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

    const noteList = notes.map((note, index) => {
      return (
        <option key={index} value={`${note === 'skip' ? '' : note + '3'}`}>
          {note}
        </option>
      )
    })

    const sequence = [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
      return (
        <select
          onChange={this.handleSequenceInput}
          key={item}
          name={`step-${item}`}
          id={`step-${item}`}
          ref={ref => (this.sequenceNotes[item] = ref)}
        >
          {noteList}
        </select>
      )
    })
    return (
      <div>
        <div className="noteLength">{noteLengthList}</div>
        <div className="sequence">{sequence}</div>
        <ArpeggiatorOctaveMeter
          ArpeggiatorOctave={this.handleArpeggiatorOctave}
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

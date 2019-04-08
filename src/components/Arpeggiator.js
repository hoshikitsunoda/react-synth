import React, { Component } from 'react'
import ArpeggiatorNoteLength from './ArpeggiatorNoteLength'
import ArpeggiatorOctaveMeter from './ArpeggiatorOctaveMeter'

import { notes } from '../constants/Constants'

class Arpeggiator extends Component {
  state = { noteLength: '', active: false, steps: [], octave: 3 }
  sequenceNotes = []

  handleSelectChange = noteLength => {
    this.setState({ noteLength: noteLength })
  }

  handleArpeggiatorNoteUpdate = () => {
    this.props.arpeggiatorNoteChange(this.state.steps)
  }

  handleSequenceInput = () => {
    const steps = []
    this.sequenceNotes.forEach(item => {
      steps.push(item.value)
    })
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
    const noteList = notes.map((note, index) => {
      return (
        <option
          key={index}
          value={`${note === 'skip' ? '' : note + this.state.octave}`}
        >
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
        <ArpeggiatorNoteLength sendNoteLength={this.props.sendNoteLength} />
        <div className="sequence">{sequence}</div>
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

import React, { Component } from 'react'
import ArpeggiatorOctaveMeter from './ArpeggiatorOctaveMeter'
import { notes } from '../constants/Constants'

class ArpeggiatorSequence extends Component {
  state = { steps: [], octave: 3 }
  sequenceNotes = []

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

  render() {
    const noteList = notes.map((note, index) => {
      return (
        <option
          key={index}
          value={`${note === 'skip' ? '' : note + this.props.octave}`}
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
        <div>{sequence}</div>
        <ArpeggiatorOctaveMeter
          arpeggiatorOctave={this.handleArpeggiatorOctave}
        />
      </div>
    )
  }
}

export default ArpeggiatorSequence

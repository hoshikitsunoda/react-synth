import React, { Component } from 'react'
import { notes } from '../constants/Constants'

class ArpeggiatorSequence extends Component {
  state = { steps: [] }
  sequenceNotes = []

  handleArpeggiatorNoteUpdate = () => {
    this.props.arpeggiatorNoteChange(this.state.steps)
  }

  handleSequenceInput = () => {
    const steps = []
    this.sequenceNotes.forEach(item => {
      steps.push(item.value)
    })
    console.log(steps)
    this.setState({ steps: steps }, this.handleArpeggiatorNoteUpdate)
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

    return <div>{sequence}</div>
  }
}

export default ArpeggiatorSequence

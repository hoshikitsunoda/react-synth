import React, { Component } from 'react'
import notes from '../constants/Constants'

class Arpeggiator extends Component {
  state = { noteLength: '', active: false, steps: [] }
  sequenceNotes = []

  handleUpdate = () => {
    this.props.sendData(this.state.noteLength)
  }

  handleSelectChange = event => {
    this.setState({ noteLength: event.target.value }, this.handleUpdate)
  }

  handleSequenceInput = () => {
    const result = []
    this.sequenceNotes.forEach(item => {
      result.push(item.value)
    })
    this.setState({ steps: result }, () => {
      console.log(this.state.steps)
    })
  }

  onClick = () => {
    const isActive = this.state.active
    this.setState({ active: !isActive })
    this.props.sequencer()
    this.handleSequenceInput()
  }

  render() {
    const noteList = notes.notes.map((note, index) => {
      return (
        <option key={index} value={note}>
          {note}
        </option>
      )
    })

    const sequence = [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
      return (
        <select
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
        <div className="noteLength">
          <input
            onChange={this.handleSelectChange}
            name="note-length"
            type="radio"
            value="2n"
          />
          <label htmlFor="2n">1/2</label>
          <input
            onChange={this.handleSelectChange}
            name="note-length"
            type="radio"
            value="4n"
          />
          <label htmlFor="4n">1/4</label>
          <input
            onChange={this.handleSelectChange}
            name="note-length"
            type="radio"
            value="8n"
          />
          <label htmlFor="8n">1/8</label>
          <input
            onChange={this.handleSelectChange}
            name="note-length"
            type="radio"
            value="16n"
          />
          <label htmlFor="16n">1/16</label>
          <input
            onChange={this.handleSelectChange}
            name="note-length"
            type="radio"
            value="32n"
          />
          <label htmlFor="32n">1/32</label>
        </div>
        <div className="sequence">{sequence}</div>
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

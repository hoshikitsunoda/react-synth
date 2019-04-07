import React, { Component } from 'react'

class Arpeggiator extends Component {
  state = { noteLength: '', active: false }

  handleUpdate = () => {
    this.props.sendData(this.state.noteLength)
  }

  handleSelectChange = event => {
    this.setState({ noteLength: event.target.value }, this.handleUpdate)
  }

  onClick = () => {
    console.log(this.state.active)
    const isActive = this.state.active
    this.setState({ active: !isActive })
    this.props.sequencer()
  }

  render() {
    return (
      <div>
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
        <button
          onClick={this.onClick}
          className={'ui toggle button' + (this.state.active ? ' active' : '')}
        >
          Arp
        </button>
      </div>
    )
  }
}

export default Arpeggiator

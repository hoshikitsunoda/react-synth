import React, { Component } from 'react'

class ArpeggiatorOctaveMeter extends Component {
  state = { octave: 3 }

  handleOctaveChange = () => {
    this.props.arpeggiatorOctave(this.state.octave)
  }

  onChange = event => {
    this.setState(
      { octave: parseInt(event.target.value) },
      this.handleOctaveChange
    )
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          type="range"
          value={this.state.octave}
          name="octave"
          min="0"
          max="7"
        />
        <div>{this.state.octave}</div>
      </div>
    )
  }
}

export default ArpeggiatorOctaveMeter

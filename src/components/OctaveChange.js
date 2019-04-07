import React, { Component } from 'react'

class OctaveChange extends Component {
  state = { octave: 3 }

  handleUpdate = () => {
    this.props.octaveChange(this.state.octave)
  }

  handleOctaveChange = event => {
    this.setState({ octave: parseInt(event.target.value) }, this.handleUpdate)
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleOctaveChange}
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

export default OctaveChange

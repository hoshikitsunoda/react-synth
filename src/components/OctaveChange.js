import React, { Component } from 'react'

class OctaveChange extends Component {
  state = { octave: 3 }

  handleUpdate = () => {
    this.props.octaveChange(this.state.octave)
  }

  handleOctaveChange = event => {
    this.setState({ octave: event.target.value }, this.handleUpdate)
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleOctaveChange}
          type="number"
          value={this.state.octave}
          name="octave"
          min="0"
          max="7"
        />
      </div>
    )
  }
}

export default OctaveChange

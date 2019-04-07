import React, { Component } from 'react'

class BPMCounter extends Component {
  state = { BPMCount: 100 }

  handleUpdate = () => {
    this.props.bpmChange(this.state.BPMCount)
  }

  handleBPMChange = event => {
    this.setState({ BPMCount: parseInt(event.target.value) }, this.handleUpdate)
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleBPMChange}
          type="range"
          value={this.state.BPMCount}
          name="octave"
          min="60"
          max="240"
        />
        <div>{this.state.BPMCount}</div>
      </div>
    )
  }
}

export default BPMCounter

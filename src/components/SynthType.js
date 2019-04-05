import React, { Component } from 'react'

class SynthType extends Component {
  state = { type: '' }

  handleUpdate = () => {
    this.props.changeSynthType(this.state.type)
  }

  handleChangeType = event => {
    this.setState({ type: event.target.value }, this.handleUpdate)
  }

  render() {
    return (
      <select value={this.state.type} onChange={this.handleChangeType}>
        <option value="Mono">MonoSynth</option>
        <option value="Duo">DuoSynth</option>
        <option value="AM">AMSynth</option>
        <option value="FM">FMSynth</option>
      </select>
    )
  }
}

export default SynthType

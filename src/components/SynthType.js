import React, { Component } from 'react'

class SynthType extends Component {
  state = { type: '' }

  handleUpdate = () => {
    this.props.changeSynthType(this.state.type)
  }

  handleChangeType = event => {
    this.setState({ type: event.target.value }, this.handleUpdate)
  }

  onChange = () => {
    this.handleChangeType()
    this.props.synthChange()
  }

  render() {
    return (
      <div>
        {this.props.synthVoice === 'mono' ? (
          <select value={this.state.type} onChange={this.onChange}>
            <option value="Mono">MonoSynth</option>
            <option value="Duo">DuoSynth</option>
            <option value="AM">AMSynth</option>
            <option value="FM">FMSynth</option>
          </select>
        ) : (
          <select value={this.state.type} onChange={this.onChange}>
            <option value="Poly">PolySynth</option>
          </select>
        )}
      </div>
    )
  }
}

export default SynthType

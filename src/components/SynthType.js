import React, { Component } from 'react'

import { SynthTypeIndicator, SelectArrow, NoteIndicatorWrap } from './styles'

class SynthType extends Component {
  state = { type: '' }

  handleUpdate = () => {
    this.props.changeSynthType(this.state.type)
  }

  onChange = event => {
    this.setState({ type: event.target.value }, this.handleUpdate)
    this.props.synthChange()
  }

  render() {
    return (
      <div>
        {this.props.synthVoice === 'mono' ? (
          <NoteIndicatorWrap>
            <SynthTypeIndicator
              value={this.state.type}
              onChange={this.onChange}
            >
              <option value="Mono">MonoSynth</option>
              <option value="Duo">DuoSynth</option>
              <option value="AM">AMSynth</option>
              <option value="FM">FMSynth</option>
            </SynthTypeIndicator>
            <SelectArrow />
          </NoteIndicatorWrap>
        ) : (
          <NoteIndicatorWrap>
            <SynthTypeIndicator
              value={this.state.type}
              onChange={this.onChange}
            >
              <option value="Poly">PolySynth</option>
            </SynthTypeIndicator>
            <SelectArrow />
          </NoteIndicatorWrap>
        )}
      </div>
    )
  }
}

export default SynthType

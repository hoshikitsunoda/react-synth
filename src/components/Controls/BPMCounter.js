import React, { Component } from 'react'

import { ControlMeterWrap, LabelWrap, IndicatorNumber, Input } from '../styles'

class BPMCounter extends Component {
  state = { BPMCount: 120 }

  handleUpdate = () => {
    this.props.bpmChange(this.state.BPMCount)
  }

  handleBPMChange = event => {
    this.setState({ BPMCount: parseInt(event.target.value) }, this.handleUpdate)
  }

  render() {
    return (
      <ControlMeterWrap>
        <Input
          onChange={this.handleBPMChange}
          type="range"
          value={this.state.BPMCount}
          name="octave"
          min="60"
          max="240"
        />
        <LabelWrap>
          <label htmlFor="BPM">BPM: </label>
          <IndicatorNumber> {this.state.BPMCount}</IndicatorNumber>
        </LabelWrap>
      </ControlMeterWrap>
    )
  }
}

export default BPMCounter

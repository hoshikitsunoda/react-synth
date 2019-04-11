import React, { Component } from 'react'

import { ControlMeterWrap, LabelWrap, IndicatorNumber, Input } from '../styles'

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
      <ControlMeterWrap>
        <Input
          onChange={this.handleOctaveChange}
          type="range"
          value={this.state.octave}
          name="octave"
          min="0"
          max="7"
        />
        <LabelWrap>
          <label htmlFor="Octave">Octave:</label>
          <IndicatorNumber>{this.state.octave}</IndicatorNumber>
        </LabelWrap>
      </ControlMeterWrap>
    )
  }
}

export default OctaveChange

import React, { Component } from 'react'

import { LabelWrap, IndicatorNumber } from './styles'

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
        <LabelWrap>
          Octave: <IndicatorNumber>{this.state.octave}</IndicatorNumber>
        </LabelWrap>
      </div>
    )
  }
}

export default ArpeggiatorOctaveMeter

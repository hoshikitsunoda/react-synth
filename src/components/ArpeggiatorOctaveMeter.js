import React, { Component } from 'react'

import styled from 'styled-components'

const OctaveIndicatorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem groove;
  padding-top: 0.25rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffaf37;
`

const OctaveIndicator = styled.div`
  width: 1.5rem;
  text-align: center;
`

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
        <OctaveIndicatorWrap>
          Octave: <OctaveIndicator>{this.state.octave}</OctaveIndicator>
        </OctaveIndicatorWrap>
      </div>
    )
  }
}

export default ArpeggiatorOctaveMeter

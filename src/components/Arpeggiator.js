import React, { Component } from 'react'
import ArpeggiatorNoteLength from './ArpeggiatorNoteLength'
import ArpeggiatorOctaveMeter from './ArpeggiatorOctaveMeter'

import styled from 'styled-components'
import {
  SequenceWrap,
  NoteIndicatorOuterWrap,
  NoteIndicatorWrap,
  NoteIndicator,
  SelectArrow
} from './styles'

import { notes } from '../constants/Constants'

const ButtonWrap = styled.div``

class Arpeggiator extends Component {
  state = { noteLength: '', active: false, steps: [], octave: 3 }
  sequenceNotes = []

  handleSelectChange = noteLength => {
    this.setState({ noteLength: noteLength })
  }

  handleArpeggiatorNoteUpdate = () => {
    this.props.arpeggiatorNoteChange(this.state.steps)
  }

  handleSequenceInput = () => {
    const steps = []
    this.sequenceNotes.forEach(item => {
      steps.push(item.value)
    })
    this.setState({ steps: steps }, this.handleArpeggiatorNoteUpdate)
  }

  handleArpeggiatorOctave = octave => {
    this.setState({ octave: octave }, this.handleSequenceInput)
  }

  onClick = event => {
    const isActive = this.state.active
    this.setState({ active: !isActive })
    if (!event.repeat) {
      this.props.sequencer()
    }
  }

  render() {
    const noteList = notes.map((note, index) => {
      return (
        <option
          key={index}
          value={`${note === 'skip' ? '' : note + this.state.octave}`}
        >
          {note}
        </option>
      )
    })

    const sequence = [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
      return (
        <NoteIndicatorWrap key={index}>
          <NoteIndicator
            onChange={this.handleSequenceInput}
            key={item}
            name={`step-${item}`}
            id={`step-${item}`}
            ref={ref => (this.sequenceNotes[item] = ref)}
          >
            {noteList}
          </NoteIndicator>
          <SelectArrow />
        </NoteIndicatorWrap>
      )
    })
    return (
      <div>
        <ArpeggiatorNoteLength sendNoteLength={this.props.sendNoteLength} />
        <SequenceWrap>
          <NoteIndicatorOuterWrap>{sequence}</NoteIndicatorOuterWrap>
          <ArpeggiatorOctaveMeter
            arpeggiatorOctave={this.handleArpeggiatorOctave}
          />
          <ButtonWrap>
            <button
              id="arp-start"
              onClick={this.onClick}
              className={`ui toggle button ${
                this.state.active ? ' active' : ''
              }`}
            >
              Arp
            </button>
          </ButtonWrap>
        </SequenceWrap>
      </div>
    )
  }
}

export default Arpeggiator

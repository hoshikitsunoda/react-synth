import React, { Component } from 'react'
import ControlPanel from './ControlPanel'
import KeyBoard from './KeyBoard'

import Tone from 'tone'

class Synth extends Component {
  state = { type: '', voice: 'mono', noteLength: '', note: '' }

  delay = new Tone.PingPongDelay('8t', 0.2)
  wah = new Tone.AutoWah()
  volume = new Tone.Volume(-30)

  synthArp = new Tone.AMSynth().chain(this.wah, this.delay, Tone.Master)
  synthMono = new Tone.DuoSynth().chain(this.volume, Tone.Master)
  synthPoly = new Tone.PolySynth().chain(this.volume, Tone.Master)

  note = this.state.note

  getNoteLength = length => {
    this.setState({ noteLength: length })
  }

  getNote = note => {
    this.setState({ note: note })
  }

  handleChangeVoice = voice => {
    this.setState({ voice: voice })
  }

  handleChangeType = type => {
    this.setState({ type: type })
  }

  handleSingleNote = () => {
    this.state.voice === 'mono'
      ? this.synthMono.triggerAttack(this.state.note)
      : this.synthPoly.triggerAttack(this.state.note)
  }

  handleSingleNoteRelease = () => {
    this.state.voice === 'mono'
      ? this.synthMono.triggerRelease()
      : this.synthPoly.releaseAll()
  }

  handleSequence = () => {
    const notes = [['C3', 'B3'], ['E3', 'D3'], 'G3', ['A3', 'G3', 'F4']]
    const sequence = new Tone.Sequence(
      (time, note) => {
        this.synthArp.triggerAttackRelease(note, '100hz', time)
      },
      notes,
      this.state.noteLength
    )

    sequence.start()
    Tone.Transport.toggle()

    // change this value to change tempo
    Tone.Transport.bpm.value = 100
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleSingleNote)
    window.addEventListener('keyup', this.handleSingleNoteRelease)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleSingleNote)
    window.removeEventListener('keyup', this.handleSingleNoteRelease)
  }

  render() {
    return (
      <div>
        <ControlPanel
          sendData={this.getNoteLength}
          sequencer={this.handleSequence}
          changeVoice={this.handleChangeVoice}
          changeSynthType={this.handleChangeType}
          synthVoiceType={this.state.voice}
        />
        <KeyBoard sendNote={this.getNote} />
      </div>
    )
  }
}

export default Synth

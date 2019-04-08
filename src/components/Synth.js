import React, { Component } from 'react'
import ControlPanel from './ControlPanel'
import KeyBoard from './KeyBoard'

import Tone from 'tone'

class Synth extends Component {
  state = {
    type: 'Mono',
    voice: 'mono',
    noteLength: '8n',
    note: '',
    octave: 3,
    BPMCount: 100,
    steps: ['C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C4']
  }

  delay = new Tone.PingPongDelay('8t', 0.4)
  wah = new Tone.AutoWah()
  volume = new Tone.Volume(-30)
  volume2 = new Tone.Volume(-20)

  synthArp = new Tone.AMSynth().chain(this.wah, this.delay, Tone.Master)
  synthMono = new Tone.MonoSynth().chain(this.volume, Tone.Master)
  synthPoly = new Tone.PolySynth().chain(this.volume2, Tone.Master)

  getNoteLength = length => {
    this.setState({ noteLength: length })
  }

  getNote = note => {
    this.setState({ note: note })
  }

  handleVoiceChange = voice => {
    this.setState({ voice: voice })
  }

  handleTypeChange = type => {
    this.setState({ type: type }, this.handleSynthChange)
  }

  handleOctaveChange = octave => {
    this.setState({ octave: octave })
  }

  handleBPMChange = bpm => {
    this.setState({ BPMCount: bpm })
  }

  handleArpeggiatorNotes = steps => {
    this.setState({ steps: steps })
  }

  handleSynthChange = () => {
    switch (this.state.type) {
      case 'Mono':
        this.synthMono = new Tone.MonoSynth().chain(this.volume, Tone.Master)
        this.setState({ type: 'mono' })
        break
      case 'Duo':
        this.synthMono = new Tone.DuoSynth().chain(this.volume, Tone.Master)
        this.setState({ type: 'mono' })
        break
      case 'AM':
        this.synthMono = new Tone.AMSynth().chain(this.volume, Tone.Master)
        this.setState({ type: 'mono' })
        break
      case 'FM':
        this.synthMono = new Tone.FMSynth().chain(this.volume, Tone.Master)
        this.setState({ type: 'mono' })
        break
      default:
        break
    }
  }

  handleSingleNote = () => {
    this.state.voice === 'mono'
      ? Tone.context.resume().then(() => {
          this.synthMono.triggerAttack(this.state.note)
        })
      : Tone.context.resume().then(() => {
          this.synthPoly.triggerAttack(this.state.note)
        })
  }

  handleSingleNoteRelease = () => {
    this.state.voice === 'mono'
      ? Tone.context.resume().then(() => {
          this.synthMono.triggerRelease()
        })
      : Tone.context.resume().then(() => {
          this.synthPoly.releaseAll()
        })
  }

  handleSequence = () => {
    const notes = this.state.steps
    const sequence = new Tone.Sequence(
      (time, note) => {
        this.synthArp.triggerAttackRelease(note, '100hz', time)
      },
      notes,
      this.state.noteLength
    )

    sequence.start()
    Tone.Transport.toggle()

    Tone.Transport.bpm.value = this.state.BPMCount
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
          sendNoteLength={this.getNoteLength}
          sequencer={this.handleSequence}
          changeVoice={this.handleVoiceChange}
          changeSynthType={this.handleTypeChange}
          synthVoice={this.state.voice}
          synthChange={this.handleSynthChange}
          octaveChange={this.handleOctaveChange}
          bpmChange={this.handleBPMChange}
          arpeggiatorNoteChange={this.handleArpeggiatorNotes}
        />
        <KeyBoard
          onClick={this.handleChangeType}
          sendNote={this.getNote}
          octave={this.state.octave}
        />
      </div>
    )
  }
}

export default Synth

import React, { Component } from 'react'
import ControlPanel from '../Controls/ControlPanel'
import KeyBoard from '../KeyBoards/KeyBoard'

import { SynthBody } from '../styles'

import Tone from 'tone'

class Synth extends Component {
  state = {
    type: 'Mono',
    voice: 'mono',
    noteLength: '8n',
    note: '',
    octave: 3,
    BPMCount: 120,
    steps: ['C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3']
  }

  delay = new Tone.PingPongDelay('8t', 0.4)
  wah = new Tone.AutoWah()
  volume = new Tone.Volume(-30)
  volume2 = new Tone.Volume(-20)

  synthArp = new Tone.FMSynth().chain(this.wah, Tone.Master)
  synthMono = new Tone.MonoSynth().chain(this.volume, Tone.Master)
  synthPoly = new Tone.PolySynth().chain(this.volume2, Tone.Master)

  notes = this.state.steps
  sequence = new Tone.Pattern(
    (time, note) => {
      this.synthArp.triggerAttackRelease(note, this.state.noteLength, time)
    },
    this.notes
    // this.state.noteLength
  )

  getNoteLength = length => {
    this.setState({ noteLength: length }, this.handleGenerateSequence)
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
    this.setState({ steps: steps }, this.handleGenerateSequence)
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

  handleSequenceStart = () => {
    this.sequence.start()
    Tone.Transport.toggle()

    Tone.Transport.bpm.value = this.state.BPMCount * 2
  }

  handleSequenceStop = () => {
    this.sequence.stop()
    Tone.Transport.toggle()
  }

  handleGenerateSequence = () => {
    this.notes = this.state.steps
    this.sequence = new Tone.Pattern(
      (time, note) => {
        this.synthArp.triggerAttackRelease(note, this.state.noteLength, time)
      },
      this.notes
      // this.state.noteLength
    )
  }

  componentDidMount() {
    window.addEventListener('keypress', event => {
      if (!event.repeat) {
        this.handleSingleNote()
      }
    })
    window.addEventListener('keyup', this.handleSingleNoteRelease)
  }

  render() {
    return (
      <SynthBody isActive={this.props.isActive}>
        <ControlPanel
          sendNoteLength={this.getNoteLength}
          sequencerStart={this.handleSequenceStart}
          sequencerStop={this.handleSequenceStop}
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
      </SynthBody>
    )
  }
}

export default Synth

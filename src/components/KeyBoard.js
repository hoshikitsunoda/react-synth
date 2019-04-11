import React, { Component } from 'react'
import { keys } from '../constants/Constants'

import { KeyboardBox, KeyWrap } from './styles'

class KeyBoard extends Component {
  state = { note: '' }
  keyNote = []

  handleUpdate = () => {
    this.props.sendNote(this.state.note)
  }

  handleNoteChange = event => {
    switch (event.key) {
      case 'a':
        this.setState({ note: `C${this.props.octave}` }, this.handleUpdate)
        break
      case 'w':
        this.setState({ note: `C#${this.props.octave}` }, this.handleUpdate)
        break
      case 's':
        this.setState({ note: `D${this.props.octave}` }, this.handleUpdate)
        break
      case 'e':
        this.setState({ note: `D#${this.props.octave}` }, this.handleUpdate)
        break
      case 'd':
        this.setState({ note: `E${this.props.octave}` }, this.handleUpdate)
        break
      case 'f':
        this.setState({ note: `F${this.props.octave}` }, this.handleUpdate)
        break
      case 't':
        this.setState({ note: `F#${this.props.octave}` }, this.handleUpdate)
        break
      case 'g':
        this.setState({ note: `G${this.props.octave}` }, this.handleUpdate)
        break
      case 'y':
        this.setState({ note: `G#${this.props.octave}` }, this.handleUpdate)
        break
      case 'h':
        this.setState({ note: `A${this.props.octave}` }, this.handleUpdate)
        break
      case 'u':
        this.setState({ note: `A#${this.props.octave}` }, this.handleUpdate)
        break
      case 'j':
        this.setState({ note: `B${this.props.octave}` }, this.handleUpdate)
        break
      case 'k':
        this.setState({ note: `C${this.props.octave + 1}` }, this.handleUpdate)
        break
      default:
        this.setState({ note: '' }, this.handleUpdate)
        break
    }
  }

  handleAddbackground = event => {
    switch (event.key) {
      case 'a':
        this.keyNote[0].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'w':
        this.keyNote[1].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 's':
        this.keyNote[2].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'e':
        this.keyNote[3].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'd':
        this.keyNote[4].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'f':
        this.keyNote[5].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 't':
        this.keyNote[6].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'g':
        this.keyNote[7].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'y':
        this.keyNote[8].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'h':
        this.keyNote[9].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'u':
        this.keyNote[10].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'j':
        this.keyNote[11].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      case 'k':
        this.keyNote[12].style.backgroundColor = 'rgba(136, 136, 136, 1)'
        break
      default:
        break
    }
  }

  handleRemovebackground = event => {
    switch (event.key) {
      case 'a':
        this.keyNote[0].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      case 'w':
        this.keyNote[1].style.backgroundColor = '#000'
        break
      case 's':
        this.keyNote[2].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      case 'e':
        this.keyNote[3].style.backgroundColor = '#000'
        break
      case 'd':
        this.keyNote[4].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      case 'f':
        this.keyNote[5].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      case 't':
        this.keyNote[6].style.backgroundColor = '#000'
        break
      case 'g':
        this.keyNote[7].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      case 'y':
        this.keyNote[8].style.backgroundColor = '#000'
        break
      case 'h':
        this.keyNote[9].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      case 'u':
        this.keyNote[10].style.backgroundColor = '#000'
        break
      case 'j':
        this.keyNote[11].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      case 'k':
        this.keyNote[12].style.backgroundColor = 'rgba(136,136,136,0.3)'
        break
      default:
        break
    }
  }

  onKeypress = event => {
    this.handleNoteChange(event)
    this.handleAddbackground(event)
  }

  onKeyup = event => {
    this.handleNoteChange(event)
    this.handleRemovebackground(event)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.onKeypress)
    window.addEventListener('keyup', this.onKeyup)
  }

  render() {
    const pianoKeys = keys.map((key, index) => {
      return (
        <KeyWrap
          key={key}
          id={`${key}-key`}
          ref={ref => (this.keyNote[index] = ref)}
        />
      )
    })
    return <KeyboardBox>{pianoKeys}</KeyboardBox>
  }
}

export default KeyBoard

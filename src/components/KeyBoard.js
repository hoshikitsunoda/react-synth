import React, { Component } from 'react'
import { keys } from '../constants/Constants'

import styled from 'styled-components'

const KeyboardBox = styled.div`
  display: flex;
  width: 50%;
  margin: 2rem auto 0;
`

const KeyWrap = styled.div`
  width: calc(100% / 8 - 2px);
  height: 10rem;
  border: 1px solid black;
  border-radius: 0.3rem;
`

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
        this.keyNote[0].style.backgroundColor = 'lightgrey'
        break
      case 'w':
        this.keyNote[1].style.backgroundColor = 'lightgrey'
        break
      case 's':
        this.keyNote[2].style.backgroundColor = 'lightgrey'
        break
      case 'e':
        this.keyNote[3].style.backgroundColor = 'lightgrey'
        break
      case 'd':
        this.keyNote[4].style.backgroundColor = 'lightgrey'
        break
      case 'f':
        this.keyNote[5].style.backgroundColor = 'lightgrey'
        break
      case 't':
        this.keyNote[6].style.backgroundColor = 'lightgrey'
        break
      case 'g':
        this.keyNote[7].style.backgroundColor = 'lightgrey'
        break
      case 'y':
        this.keyNote[8].style.backgroundColor = 'lightgrey'
        break
      case 'h':
        this.keyNote[9].style.backgroundColor = 'lightgrey'
        break
      case 'u':
        this.keyNote[10].style.backgroundColor = 'lightgrey'
        break
      case 'j':
        this.keyNote[11].style.backgroundColor = 'lightgrey'
        break
      case 'k':
        this.keyNote[12].style.backgroundColor = 'lightgrey'
        break
      default:
        break
    }
  }

  handleRemovebackground = event => {
    switch (event.key) {
      case 'a':
        this.keyNote[0].style.backgroundColor = 'white'
        break
      case 'w':
        this.keyNote[1].style.backgroundColor = 'white'
        break
      case 's':
        this.keyNote[2].style.backgroundColor = 'white'
        break
      case 'e':
        this.keyNote[3].style.backgroundColor = 'white'
        break
      case 'd':
        this.keyNote[4].style.backgroundColor = 'white'
        break
      case 'f':
        this.keyNote[5].style.backgroundColor = 'white'
        break
      case 't':
        this.keyNote[6].style.backgroundColor = 'white'
        break
      case 'g':
        this.keyNote[7].style.backgroundColor = 'white'
        break
      case 'y':
        this.keyNote[8].style.backgroundColor = 'white'
        break
      case 'h':
        this.keyNote[9].style.backgroundColor = 'white'
        break
      case 'u':
        this.keyNote[10].style.backgroundColor = 'white'
        break
      case 'j':
        this.keyNote[11].style.backgroundColor = 'white'
        break
      case 'k':
        this.keyNote[12].style.backgroundColor = 'white'
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

import React, { Component } from 'react'
import Key from './Key'
import keys from '../constants/Constants'

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
        this.setState({ note: 'C6' }, this.handleUpdate)
        break
      case 'w':
        this.setState({ note: 'C#6' }, this.handleUpdate)
        break
      case 's':
        this.setState({ note: 'D6' }, this.handleUpdate)
        break
      case 'e':
        this.setState({ note: 'D#6' }, this.handleUpdate)
        break
      case 'd':
        this.setState({ note: 'E6' }, this.handleUpdate)
        break
      case 'f':
        this.setState({ note: 'F6' }, this.handleUpdate)
        break
      case 't':
        this.setState({ note: 'F#6' }, this.handleUpdate)
        break
      case 'g':
        this.setState({ note: 'G6' }, this.handleUpdate)
        break
      case 'y':
        this.setState({ note: 'G#6' }, this.handleUpdate)
        break
      case 'h':
        this.setState({ note: 'A6' }, this.handleUpdate)
        break
      case 'u':
        this.setState({ note: 'A#6' }, this.handleUpdate)
        break
      case 'j':
        this.setState({ note: 'B6' }, this.handleUpdate)
        break
      case 'k':
        this.setState({ note: 'C7' }, this.handleUpdate)
        break
      default:
        this.setState({ note: '' }, this.handleUpdate)
        break
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleNoteChange)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleNoteChange)
  }

  render() {
    const pianoKeys = keys.keys.map(key => {
      return (
        <KeyWrap key={key} id={`${key}-key`}>
          <Key key={key} />
        </KeyWrap>
      )
    })
    return <KeyboardBox>{pianoKeys}</KeyboardBox>
  }
}

export default KeyBoard

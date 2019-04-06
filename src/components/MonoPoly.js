import React, { Component } from 'react'

class MonoPoly extends Component {
  state = { voice: '' }

  handleUpdate = () => {
    this.props.changeVoice(this.state.voice)
  }

  handleMono = () => {
    this.setState({ voice: 'mono' }, this.handleUpdate)
  }

  handlePoly = () => {
    this.setState({ voice: 'poly' }, this.handleUpdate)
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleMono}
          className={
            'ui left attached button' +
            (this.props.synthVoice === 'mono' ? ' active' : '')
          }
        >
          Mono
        </button>
        <button
          onClick={this.handlePoly}
          className={
            'ui right attached button' +
            (this.props.synthVoice === 'poly' ? ' active' : '')
          }
        >
          Poly
        </button>
      </div>
    )
  }
}

export default MonoPoly

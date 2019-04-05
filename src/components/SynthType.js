import React, { Component } from 'react'

class SynthType extends Component {
  state = { type: '' }

  handleUpdate = () => {
    this.props.changeSynthType(this.state.type)
  }

  handleChangeType = event => {
    this.setState({ type: 'Duo' }, this.handleUpdate)
  }

  render() {
    return <div onClick={this.handleChangeType}>Type</div>
  }
}

export default SynthType

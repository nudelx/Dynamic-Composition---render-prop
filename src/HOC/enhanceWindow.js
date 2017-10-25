import React, { Component }  from 'react'

const EnhanceWindow = Window => class extends Component {
  state = { snow: false }

  turnOnTheSnow = () => {
    // very long and complicated code
    this.setState({snow: true})
  }

  turnOffTheSnow = () => {
    // very long and complicated code
    this.setState({snow: false})
  }

  renderSnow () {
    return (<div className={'snow'} />)
  }

  render() {
    return (
      <Window
        {...this.state}
        turnOffTheSnow={this.turnOffTheSnow}
        turnOnTheSnow={this.turnOnTheSnow}
        renderSnow={this.renderSnow}
        {...this.props}
      />
    )
  }
}


export default EnhanceWindow

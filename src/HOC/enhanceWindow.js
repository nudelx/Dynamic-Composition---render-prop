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

  render() {
    return (
      <Window
        {...this.state}
        turnOffTheSnow={this.turnOffTheSnow}
        turnOnTheSnow={this.turnOnTheSnow}
      />
    )
  }
}


export default EnhanceWindow

import React, { Component }  from 'react'

class DCCWindow extends Component  {
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
    const { children } = this.props
    const { snow } = this.state
    const { turnOffTheSnow, turnOnTheSnow, renderSnow } = this
    return (
      <div>
        {
          children({turnOffTheSnow, turnOnTheSnow, snow, renderSnow })
        }
    </div>
    )
  }
}


export default DCCWindow

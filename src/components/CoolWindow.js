import React, { Component } from 'react'

export const common = {
  turnOnTheSnow: function ()  {
    console.log(this)
    // very long and complicated code
    this.setState({ snow: true })
  },

  turnOffTheSnow: function () {
    console.log(this)
    // very long and complicated code
    this.setState({ snow: false })
  }
}

// mixins : [common, common1]
// constructor(props) {
//   super(props)
//   this.state = { snow: false }
//   Object.assign(this, common)
//   console.log(this)
// }

class CoolWindow extends Component {
  
  state = { snow: false }

  turnOnTheSnow = () =>  {
    // very long and complicated code
    this.setState({ snow: true })
  }

  turnOffTheSnow = () => {
    // very long and complicated code
    this.setState({ snow: false })
  }

  render() {

    const { snow } = this.state
    return (
      <div
        className={'window'}
        onMouseEnter={this.turnOnTheSnow}
        onMouseLeave={this.turnOffTheSnow}
      >
        <div className={'vert'} />
        <div className={'hor'} />
        { snow ? <div className={'snow'} /> : null }
      </div>
    )
  }
}


export default CoolWindow

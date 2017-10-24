import React, { Component } from 'react'

// class Window extends Component {
//   state = { snow: false }
//
//   turnOnTheSnow = () => {
//     // very long and complicated code
//     this.setState({snow: true})
//   }
//
//   turnOffTheSnow = () => {
//     // very long and complicated code
//     this.setState({snow: false})
//   }
//
//   render() {
//     const { snow } = this.state
//     return (
//       <div className={'window'} onMouseEnter={this.turnOnTheSnow} onMouseLeave={this.turnOffTheSnow}>
//         <div className={'vert'}></div>
//         <div className={'hor'}></div>
//         { snow ? <div className={'snow'}/> : null}
//       </div>
//     )
//   }
// }

class Window extends Component {
  render() {
    const { snow, turnOnTheSnow, turnOffTheSnow } = this.props
    return (
      <div
        className={'window'}
        onMouseEnter={turnOnTheSnow}
        onMouseLeave={turnOffTheSnow}
      >
        <div className={'vert'} />
        <div className={'hor'} />
        {snow ? <div className={'snow'} /> : null}
      </div>
    )
  }
}

export default Window

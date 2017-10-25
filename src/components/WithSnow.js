import React, { Component } from 'react'

class WithSnow extends Component {

  saySomething () {
    console.log('something')
  }

  render() {
    const { children } = this.props
    return (
      <div className={'snow'} >
        {children}
      </div>
    )
  }
}

export default WithSnow

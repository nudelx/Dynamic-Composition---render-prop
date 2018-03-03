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



/*
 => donot forget to talk about composition
const add = x =>  x + 1
const sub = x =>  x - 1
const mul2 = x =>  x * 2
const pow2 = x =>  x ** 2
const pipe = (f,g) => (...args) => g(f(...args))
const t1 = pipe(add, mul2)
t1(2)
const pipeAll = (...fns) => fns.reduce(pipe)
const testAll = pipeAll(add, sub, mul2, pow2)
testAll(2)

*/

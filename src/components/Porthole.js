import React , {Component} from  'react'

class Window extends Component {
  render() {
    const { snow, turnOnTheSnow, turnOffTheSnow } = this.props
    return (
      <div
        className={'window window-port'}
        onMouseEnter={turnOnTheSnow}
        onMouseLeave={turnOffTheSnow}
      >

        {snow ? <div className={'snow'} /> : null}
      </div>

    )
  }
}

export default Window

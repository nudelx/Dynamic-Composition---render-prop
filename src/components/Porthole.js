import React , {Component} from  'react'

class PortHole extends Component {
  render() {
    const { snow, turnOnTheSnow, turnOffTheSnow, renderSnow } = this.props
    return (
      <div
        className={'window window-port'}
        onMouseEnter={turnOnTheSnow}
        onMouseLeave={turnOffTheSnow}
      >
        {
          snow && renderSnow
          ? renderSnow()
          : null
        }
      </div>

    )
  }
}

export default PortHole

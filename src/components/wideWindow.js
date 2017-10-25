import React , {Component} from  'react'

class WideWindow extends Component {

  render() {
    const { snow, turnOnTheSnow, turnOffTheSnow, playMusic, renderSnow } = this.props
    return (
      <div
        className={'window wide'}
        onMouseEnter={turnOnTheSnow}
        onMouseLeave={turnOffTheSnow}
      >
        <div className={'vert '} />
        <div className={'vert vert-wide'} />
        <div className={'vert vert-wide-wide'} />
        <div className={'hor hor-wide'} />
        {
          snow && renderSnow
          ? renderSnow()
          : null
        }
         {snow && playMusic && playMusic()}
      </div>
    )
  }
}

export default WideWindow

import React , {Component} from  'react'

class WideWindow extends Component {

  renderSnow() {
    return (<div className={'snow'} />)
  }

  render() {
    console.log('wide', this.props)
    const { snow, turnOnTheSnow, turnOffTheSnow, playMusic } = this.props
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
          snow
          ? this.renderSnow()
          : null
        }
         {snow && playMusic && playMusic()}
      </div>
    )
  }
}

export default WideWindow

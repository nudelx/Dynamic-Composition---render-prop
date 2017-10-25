import React, { Component } from 'react'
const Window = (props) => {
  const { snow, turnOnTheSnow, turnOffTheSnow } = props
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
export default Window

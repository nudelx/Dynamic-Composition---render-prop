import React, { Component } from 'react'
const Window = (props) => {
  const { snow, turnOnTheSnow, turnOffTheSnow, renderSnow } = props
  return (
    <div
      className={'window'}
      onMouseEnter={turnOnTheSnow}
      onMouseLeave={turnOffTheSnow}
    >
      <div className={'vert'} />
      <div className={'hor'} />
      {
        snow && renderSnow
        ? renderSnow() 
        : null}
    </div>
  )
}
export default Window

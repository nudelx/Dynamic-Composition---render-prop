import React from 'react'
import WithSnow from '../components/WithSnow'

const LetItSnow = () => <div className="justTest">Let It Snow! Let It Snow! Let It Snow!</div>


const MethodOne = () => {
  return (
    <WithSnow>
      <LetItSnow />
    </WithSnow>
  )
}

export default MethodOne

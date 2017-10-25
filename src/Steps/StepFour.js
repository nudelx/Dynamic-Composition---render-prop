import React from 'react'
import Window from '../components/Window'
import Porthole from '../components/Porthole'
import WideWindow from '../components/wideWindow'
import EnhanceWindow from '../HOC/enhanceWindow'
import EnhanceWindowWithMusic from '../HOC/enhanceWithMusic'

// const MethodFour1 = () => {
//
//
//   return (
//     <div>
//       <Window snow={x} />
//       <PortHoleWithSnow snow={x} />
//       <WideWindowWithSnowAndMusic snow={x} />
//     </div>
//   )
// }

const MethodFour = () => {
  const WindowWithSnow = EnhanceWindow(Window)
  const PortHoleWithSnow = EnhanceWindow(Porthole)
  const WideWindowWithSnowAndMusic = EnhanceWindow(
    EnhanceWindowWithMusic(WideWindow)
  )

  return (
    <div>
      <WindowWithSnow />
      <PortHoleWithSnow />
      <WideWindowWithSnowAndMusic />
    </div>
  )
}

export default MethodFour

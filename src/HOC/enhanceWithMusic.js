import React, { Component }  from 'react'
import * as music from '../music/12-letitsn_AJnW9B4l.mp3'

const EnhanceWindowWithMusic = Window => class extends Component {

  playMusic() {
    return (
      <div>
        <audio autoPlay>
        <source src={music} type="audio/mpeg" />
        </audio>
      </div>

    )
  }

  render() {
    console.log('music', this.props)
    return (
      <Window
        playMusic={this.playMusic}
        {...this.props}
      />
    )
  }
}


export default EnhanceWindowWithMusic

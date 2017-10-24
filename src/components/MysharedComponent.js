import React, { Component } from 'react'

class MyShare extends Component {
  state = { alex: 'HOC DIE !!!'}

  render() {
    return (
      <div>
        {this.props.children(this.state)}
      </div>
    )
  }

}

export default MyShare

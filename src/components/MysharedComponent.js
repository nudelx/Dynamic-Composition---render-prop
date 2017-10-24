import React, { Component } from 'react'

class MyShare extends Component {
  state = { 'HOC': 'IS FOR KIDS' }

  render() {
    return (
      <div>
        {this.props.children(this.state)}
      </div>
    )
  }

}

export default MyShare

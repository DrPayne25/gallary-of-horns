import React from 'react'

class HornedBeats extends React.Component {
  render () {
    return ( 
      <>
      <h2>{this.props.title}</h2>
      <img
      src = {this.props.imageUrl}
      alt={this.props.description}
      />
      <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeats;

import React from 'react'
import "./HornedBeasts.css"

class HornedBeats extends React.Component {
  render () {
    return ( 
      <article>
      <h2>{this.props.title}</h2>
      <img
      src = {this.props.imageUrl}
      alt={this.props.description}
      />
      <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeats;

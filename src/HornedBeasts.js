import React from 'react'
import "./HornedBeasts.css"
import Button from 'react-bootstrap/Button';

class HornedBeats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timesFavorited: 0,
      showFavorite: false,
    }
  }

  favorite = () => {
    this.setState({
      timesFavorited: this.state.timesFavorited + 1,
      showFavorite: true,
    })
  }

  unFavorite = () => {
    this.setState({
      timesFavorited: this.state.timesFavorited - 1,
      showFavorite: false,
    })
  }

  render () {
    return ( 
      <article className='hornedBeats'>
      <h2>{this.props.title}</h2>
      <img
      src = {this.props.imageUrl}
      alt={this.props.description}
      onClick={this.favoriteIcon}
      />
      <p>{this.props.description}</p>
      <p>{this.state.timesFavorited ? this.state.timesFavorited : '0'} Favorite {this.state.showFavorite ? '💘' : ''}</p>
      <button onClick={this.favorite}>Favorite</button>
      <button onClick={this.unFavorite}>Un-Favorite</button>
      </article>
    )
  }
}

export default HornedBeats;

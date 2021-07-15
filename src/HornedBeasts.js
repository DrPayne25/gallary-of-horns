import React from 'react'
import "./HornedBeasts.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

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
      <Card>
        <Card.Img 
          variant="bottom"       
          src = {this.props.imageUrl}
          alt={this.props.description}
          onClick={this.favoriteIcon} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <p>{this.props.horns} Horns</p>
          <p id="favorite">{this.state.timesFavorited ? this.state.timesFavorited : '0'} Favorite {this.state.showFavorite ? '💘' : ''}</p>
          <Button variant="outline-primary" onClick={this.favorite}>Favorite</Button>
          <Button variant="outline-danger" onClick={this.unFavorite}>Un-Favorite</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeats;


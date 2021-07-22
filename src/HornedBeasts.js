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
    });
    this.props.subtractWalletProperty();
  }

  setSelectedBeastHorned = () => {
    this.props.setSelectedBeast(this.props.beast.title, this.props.beast.description, this.props.beast.image_url)
  }

  unFavorite = () => {
    this.setState({
      timesFavorited: this.state.timesFavorited - 1,
      showFavorite: false,
    });
    this.props.addWalletProperty();
  }

  render () {
    return ( 
      <Card>
        <Card.Img 
          variant="top"       
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          onClick={this.setSelectedBeastHorned}/>
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>{this.props.beast.description}</Card.Text>
          <p>{this.props.beast.horns} Horns</p>
          <p id="favorite">{this.state.timesFavorited ? this.state.timesFavorited : '0'} Favorite {this.state.showFavorite ? '💘' : ''}</p>
          <Button variant="outline-primary" onClick={this.favorite}>Favorite</Button>
          <Button variant="outline-success" onClick={this.setSelectedBeastHorned}>About this Beast</Button>
          <Button variant="outline-danger" onClick={this.unFavorite}>Un-Favorite</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeats;


import React from 'react'
import HornedBeats from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 200,
      horns: 0,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState ({
      horns:e.target.value,
    })
    console.log(e.target.value);
  }

  subtractWallet = () => {
    this.setState({
      wallet: this.state.wallet - 10,
    })
  }

  addWallet = () => {
    this.setState({
      wallet: this.state.wallet + 10,
    })
  }

  render () {
    let beastsToRender = 
    <CardColumns>
    {this.props.data.map((beast, idx) => (
      <HornedBeats
      buttonShowModal={this.props.buttonShowModal}
      setSelectedBeast= {this.props.setSelectedBeast} 
      subtractWalletProperty={this.subtractWallet}
      addWalletProperty={this.addWallet}
      horns={beast.horns}
      key={idx}
      beast={beast}
      /> 
      ))}
      </CardColumns>

    return(
      <>
        <h3>Wallet Balance: ${this.state.wallet}</h3>
        <Container>
          <Form id="hornsForm">
            <Form.Group>
              <Form.Label>How Many Horns</Form.Label>
              <Form.Control as="select" custom aria-label="Default select example" onChange={this.handleSubmit}>
                <option value="">Filter By Horns</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
        {beastsToRender}
      </>
    )
  }
}

export default Main;






import React from 'react'
import HornedBeats from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'


class Main extends React.Component {
  constructor(props) { //Sets the state for wallet and horns 
    super(props);
    this.state = {
      wallet: 200,
      horns: 0,
    }
  }

  handleSubmit = e => {  //Handles the select on the 
    e.preventDefault();
    this.setState ({
      horns: parseInt(e.target.value),
    })
    console.log(e.target.value);
  }

  subtractWallet = () => { //Changes the state of the wallet by -10
    this.setState({
      wallet: this.state.wallet - 10,
    })
  }

  addWallet = () => { //Changes the state of the wallet by +10
    this.setState({
      wallet: this.state.wallet + 10,
    })
  }

  renderBeast() {  //filters through the this.props.data based on the horns selected 
    if (this.state.horns === 0) {
      return this.props.data.map((beast, idx) => (
        <HornedBeats
        buttonShowModal={this.props.buttonShowModal}
        setSelectedBeast= {this.props.setSelectedBeast} 
        subtractWalletProperty={this.subtractWallet}
        addWalletProperty={this.addWallet}
        horns={beast.horns}
        key={idx}
        beast={beast}
        /> 
        ))

    } else {
      return this.props.data.filter(beast => beast.horns === this.state.horns).map((beast, idx) => (
      <HornedBeats
      buttonShowModal={this.props.buttonShowModal}
      setSelectedBeast= {this.props.setSelectedBeast} 
      subtractWalletProperty={this.subtractWallet}
      addWalletProperty={this.addWallet}
      horns={beast.horns}
      key={idx}
      beast={beast}
      /> 
      ))
    } 
  }

  render () {

    return(
      <>
        <h3>Wallet Balance: ${this.state.wallet}</h3>
        <Container>
          <Form id="hornsForm">
            <Form.Group>
              <Form.Label>How Many Horns</Form.Label>
              <Form.Control as="select" custom aria-label="Default select example" onChange={this.handleSubmit}>
                <option value="0">Filter By Horns</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
        <CardColumns>
        {this.renderBeast()}
        </CardColumns>
      </>
    )
  }
}

export default Main;






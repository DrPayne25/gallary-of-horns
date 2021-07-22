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
    }
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
              <Form.Control as="select" custom aria-label="Default select example">
                <option value="">Filter By Horns</option>
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






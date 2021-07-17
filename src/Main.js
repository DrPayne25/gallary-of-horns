import React from 'react'
import HornedBeats from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import SelectedBeast from './SelectedBeast';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 200,
      showModal: false
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
      title= {beast.title}
      imageUrl= {beast.image_url}
      description={beast.description}/> 
      ))}
      </CardColumns>

    return(
      <main>
        <h3>Wallet Balance: ${this.state.wallet}</h3>
        {beastsToRender}
      </main>
    )
  }
}

export default Main;






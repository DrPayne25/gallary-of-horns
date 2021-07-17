import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import data from "./data.json"
import './App.css';
import Modal from 'react-bootstrap/Modal'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  }

  buttonShowModal = () => {
    this.setState({
      showModal: true,
    })
  }

  buttonCloseModal = () => {
    this.setState({
      showModal: false,
      selectedBeast: {},
    })
  }

  render(){
    return(
      <>
      <Header />
      <Modal show={this.state.showModal} onHide={this.buttonCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{data[0].title}</Modal.Title>
        </Modal.Header>
        <img
        src= {data[0].image_url}
        alt= {data[0].description} />
        <Modal.Body>{data[0].description}
        </Modal.Body>
      </Modal>
      <Main 
      data= {data} buttonShowModal={this.buttonShowModal}/>
      <Footer />
      </>
    )
  }
}

export default App;


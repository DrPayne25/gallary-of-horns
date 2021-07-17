import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import data from "./data.json"
import './App.css';
import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {
        title: '',
        description: '',
        imageUrl: '',///write a functions inside this that adjust the state
      },
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
    })
  }

  setSelectedBeast = (title, description, imageUrl) => {
    this.buttonShowModal();
    this.setState({
      // showModal: txrue,
      selectedBeast: {
        title: title,
        description: description,
        imageUrl: imageUrl,
      }
    })
  }

  render(){
    return(
      <>
      <Header />
      <h2 onClick={this.buttonShowModal}> Modal Test</h2>
      <SelectedBeast 
      buttonShowModal={this.buttonShowModal} 
      buttonCloseModal={this.buttonCloseModal} 
      showModal2={this.state.showModal} 
      imageUrl={this.state.selectedBeast.imageUrl} 
      description= {this.state.selectedBeast.description} 
      title= {this.state.selectedBeast.title}/>
      <Main 
      data= {data} 
      buttonShowModal={this.buttonShowModal} buttonCloseModal={this.buttonCloseModal} showModal2={this.state.showModal} setSelectedBeast={this.setSelectedBeast}/>
      <Footer />
      </>
    )
  }
}

export default App;

      // <Modal show={this.state.showModal} onHide={this.buttonCloseModal}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>{data[0].title}</Modal.Title>
      //   </Modal.Header>
      //   <img
      //   src= {data[0].image_url}
      //   alt= {data[0].description} />
      //   <Modal.Body>{data[0].description}
      //   </Modal.Body>
      // </Modal>

      //       <Modal show={this.state.showModal} onHide={this.buttonCloseModal}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>{data[0].title}</Modal.Title>
      //   </Modal.Header>
      //   <img
      //   src= {data[0].image_url}
      //   alt= {data[0].description} />
      //   <Modal.Body>{data[0].description}
      //   </Modal.Body>
      // </Modal>

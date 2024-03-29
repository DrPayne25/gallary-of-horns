import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import data from "./data.json"
import './App.css';
import SelectedBeast from './SelectedBeast';

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
      showModal: true,
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
      <SelectedBeast  
      buttonCloseModal={this.buttonCloseModal} 
      showModal2={this.state.showModal} 
      imageUrl={this.state.selectedBeast.imageUrl} 
      description= {this.state.selectedBeast.description} 
      title= {this.state.selectedBeast.title}
      buttonShowModal={this.buttonShowModal}/>
      <Main 
      data={data} 
      buttonShowModal={this.buttonShowModal} 
      showModal2={this.state.showModal} 
      setSelectedBeast={this.setSelectedBeast}/>
      <Footer />
      </>
    )
  }
}

export default App;


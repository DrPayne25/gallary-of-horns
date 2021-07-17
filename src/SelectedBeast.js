import React from 'react'
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component{
  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.buttonCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body</Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;

// constructor(props){
//   super(props);
//   this.state = {
//     showModal: false,
//   }
// }

// buttonShowModal = () => {
//   this.setState({
//     showModal: true,
//   })
// }

// buttonCloseModal = () => {
//   this.setState({
//     showModal: false,
//     selectedBeast: {},
//   })
// }

// <Modal show={this.state.showModal} onHide={this.buttonCloseModal}>
// <Modal.Header closeButton>
//   <Modal.Title>This is my Modal</Modal.Title>
// </Modal.Header>
// <Modal.Body>Modal Body</Modal.Body>
// </Modal>
// <Main 
// data= {data} buttonShowModal={this.buttonShowModal}/>

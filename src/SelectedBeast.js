import React from 'react'
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component{
  render() {
    return (
      <Modal show={this.props.showModal2} onHide={this.props.buttonCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <img
        src= {this.props.imageUrl}
        alt= {this.props.description} />
        <Modal.Body>{this.props.description}</Modal.Body>
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

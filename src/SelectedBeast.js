import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "./SelectedBeast.css"

class SelectedBeast extends React.Component{
  render() {
    return (
      <Modal 
      className="selectedBeast"
      show={this.props.showModal2} 
      onHide={this.props.buttonCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.data.title}</Modal.Title>
        </Modal.Header>
        <img
        src= {this.props.beast.image_url}
        alt= {this.props.description} />
        <Modal.Body>{this.props.description}</Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;

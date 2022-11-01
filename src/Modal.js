import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

export const CivicModal = (props) => {
    var subtitle;


    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
   
    if (!props.data){
        return null;
    }
   
      return (
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal
            isOpen={props.data}
            onAfterOpen={afterOpenModal}
            onRequestClose={props.onClose}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>
            
            <div><b>Name:</b> {props.data.name}</div>
            <div><b>Phone:</b> {props.data.phone}</div>
            <div><b>Color:</b> {props.data.color}</div>
            <div><b>Status:</b> {props.data.atDealer ? "At dealer" : "Transit"}</div>
            <div><b>City:</b> {props.data.city}</div>
            <div><b>State:</b> {props.data.state}</div>
            <div><b>Vin:</b> {props.data.vin}</div>
            <br />
            <button onClick={props.onClose}>close</button>
           
          </Modal>
        </div>
      );
  }
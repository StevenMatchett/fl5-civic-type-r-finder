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
    console.log(props.data)
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
   
            <h2 style={{color:"black"}} ref={_subtitle => (subtitle = _subtitle)}></h2>
            
            <div style={{color:"black"}} ><b>Name:</b> {props.data.name}</div>
            <div style={{color:"black"}} ><b>Phone:</b> {props.data.phone}</div>
            <div style={{color:"black"}} ><b>Color:</b> {props.data.color}</div>
            <div style={{color:"black"}} ><b>Status:</b> {props.data.atDealer ? "At dealer" : "Transit"}</div>
            <div style={{color:"black"}} ><b>City:</b> {props.data.city}</div>
            <div style={{color:"black"}} ><b>State:</b> {props.data.state}</div>
            <div style={{color:"black"}} ><b>Vin:</b> {props.data.vin}</div>
            <br />
            <button onClick={props.onClose}>close</button>
           
          </Modal>
        </div>
      );
  }

  
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
   
            <h2 style={{color:"black"}} ref={_subtitle => (subtitle = _subtitle)}></h2>
            {props.data.cars && props.data.cars.map((car, index)=>{
              return ( 
                <>
                  <div style={{color:"black"}} ><b>Name:</b> {car.name}</div>
                  <div style={{color:"black"}} ><b>Phone:</b> {car.phone}</div>
                  <div style={{color:"black"}} ><b>Color:</b> {car.color}</div>
                  <div style={{color:"black"}} ><b>Status:</b> {car.atDealer ? "At dealer" : "Transit"}</div>
                  <div style={{color:"black"}} ><b>City:</b> {car.city}</div>
                  <div style={{color:"black"}} ><b>State:</b> {car.state}</div>
                  <div style={{color:"black"}} ><b>Vin:</b> {car.vin}</div>
                  <br />
                </>
              )
            })}
           
            <button onClick={props.onClose}>close</button>
           
          </Modal>
        </div>
      );
  }

  
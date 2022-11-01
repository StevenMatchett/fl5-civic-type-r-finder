import React from 'react';
import Modal from 'react-modal';

const data = await import('../allCTRs.json')
const vins = Object.keys(data);
const ALL = vins.length-1;
const colors = {}
vins.forEach(vin=>{
    if (vin === 'default') return;
    const color = data[vin].color;

    if (colors[color]){
        colors[color]++;
    } else {
        colors[color] = 1;
    }
})

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
 

const StatsModal = (props) => {
    var subtitle;


    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

   
      return (
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal
            isOpen={props.open}
            onAfterOpen={afterOpenModal}
            onRequestClose={props.onClose}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            <h2 style={{color:"black"}} ref={_subtitle => (subtitle = _subtitle)}></h2>
            <div style={{color:"black"}} >Every FL5 that has been shipped and delivered</div>
            <br />
            { Object.keys(colors).map(color=>{
                return (
                    <div style={{color:"black"}} ><b>{color}:</b> {colors[color]}</div>
                )
            })}
    
            <div style={{color:"black"}} ><b>Total</b> {ALL}</div>
            <br />
            <button onClick={props.onClose}>close</button>
           
          </Modal>
        </div>
      );
  }

  export default StatsModal;
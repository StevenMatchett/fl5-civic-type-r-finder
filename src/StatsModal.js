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
      <>
        <Modal
          isOpen={props.open}
          onAfterOpen={afterOpenModal}
          onRequestClose={props.onClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
  
          <h2 className="text-black" ref={_subtitle => (subtitle = _subtitle)}></h2>
          <b><div className="text-black" >Every FL5 that has been shipped and delivered</div></b>
          <br />
          { Object.keys(colors).map(color=>{
              return (
                  <div className="text-black" ><b>{color}:</b> {colors[color]}</div>
              )
          })}
  
          <div className="text-black" ><b>Total</b> {ALL}</div>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2" onClick={props.onClose}>close</button>
  
        </Modal>
      </>
    );
  }

  export default StatsModal;
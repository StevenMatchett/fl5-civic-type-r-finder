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
 
function getCurrentUrl() {
    // Get the current URL
    let url = window.location.href;
  
    // Remove any query parameters
    url = url.split('?')[0];
  
    // Remove any trailing slash
    url = url.replace(/\/$/, '');
  
    return url;
}
export const TroubleLoading = ({toggleTroubleLoading}) => {
    var subtitle;
    const baseUrl = getCurrentUrl()

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    return (
      <>
        <Modal
          isOpen={true}
          onAfterOpen={afterOpenModal}
          onRequestClose={toggleTroubleLoading}
          style={customStyles}
          contentLabel="Example Modal"
        >
  
        <h2 style={{color:"black"}} ref={_subtitle => (subtitle = _subtitle)}></h2>

          
        {/* <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"> */}
            {/* This is the background overlay, you can customize the background color using Tailwind classes */}
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* This is the modal container, you can customize the width and padding using Tailwind classes */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* This is the "Trouble loading" message */}
                <div className="text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Trouble loading
                    </h3>
                    <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                        The google maps plugin I am using doesn't work well with mobile devices. These links below will reload the page with the specific toggles selected.
                    </p>
                    </div>
                </div>

                {/* These are the three link options */}
                <div className="mt-5 sm:mt-6">
                    <div className="flex items-center justify-center">
                    <a href={`${baseUrl}?in-transit=true`} className="px-4 py-2 font-medium text-indigo-600 bg-gray-50 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        In transit
                    </a>
                    <a href={`${baseUrl}?at-dealer=true`} className="px-4 py-2 font-medium text-indigo-600 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        At dealer
                    </a>
                    <a href={baseUrl} className="px-4 py-2 font-medium text-indigo-600 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        Both in transit and at dealer
                    </a>
                    </div>
                </div>
                </div>
            </div>
        {/* </div>   */}
  
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2" onClick={toggleTroubleLoading}>close</button> */}

        </Modal>
      </>
    );
  }

  
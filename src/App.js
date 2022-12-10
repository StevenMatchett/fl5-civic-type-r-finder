import React, {useState} from 'react';
import {Map} from './Map';
import {CivicModal} from './Modal';
import dynamic from 'next/dynamic';
import {lastUpdate} from './time';
import Multiselect from 'multiselect-react-dropdown';
import Header from './Header';
import { TroubleLoading } from './TroubleLoading';
import {getQueryParams} from './utils/qs';

const StatsModal = dynamic(() => import('./StatsModal'), {
  ssr: false,
});

const colorOptions = ['Crystal Black Pearl', 'Rallye Red', 'Boost Blue Pearl', 'Championship White', 'Sonic Gray Pearl'].map((color, index) => ({
  name: color,
  id: index,
}));

function App() {
  const queryParams = typeof window !== 'undefined'  ? getQueryParams() : {};

  const defaultSelection = {
    intTansit: queryParams['at-dealer'] ? false: true,
    atDealer: queryParams['in-transit'] ? false: true,
  }

  const [data, setData] = useState(null);
  const [statsOpen, setStatsOpen] = useState(false);
  const [showTroubleLoading, setTroubleLoading] = useState(false);
  const [selectedColors, setSelectedColors] = useState(colorOptions);
  const [atDealer, setAtDealer] = useState(defaultSelection.atDealer);
  const [atTransit, setAtTransit] = useState(defaultSelection.intTansit);
  const [twoPlus, setTwoPlus] = useState(false);

  const toggleTroubleLoading = () => {
    setTroubleLoading(!showTroubleLoading);
  }
  
  const handleColorSelect = (selectedOptions) => {
    setSelectedColors(selectedOptions);
  };

  const handleColorRemove = (selectedOptions) => {
    setSelectedColors(selectedOptions);
  };

  const handleAtTransitChange = () => {
    setAtTransit(!atTransit);
  };

  const handleAtDealerChange = () => {
    setAtDealer(!atDealer);
  };

  const handleTwoPlusChange = () => {
    setTwoPlus(!twoPlus);
  };

  return (
    <>
      <Header toggleTroubleLoading={toggleTroubleLoading}/>
      <label class="inline-block mr-4">
      In Transit
      <input
        class="form-checkbox ml-2"
        type="checkbox"
        value={atTransit}
        checked={atTransit}
        onChange={handleAtTransitChange}
      />
    </label>
    <label class="inline-block mr-4">
      At Dealer
      <input
        class="form-checkbox ml-2"
        type="checkbox"
        value={atDealer}
        checked={atDealer}
        onChange={handleAtDealerChange}
      />
    </label>
    <label class="inline-block mr-4">
      Dealers with 2+
      <input
        class="form-checkbox ml-2"
        type="checkbox"
        value={twoPlus}
        checked={twoPlus}
        onChange={handleTwoPlusChange}
      />
    </label>
  
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2"
      onClick={() => {setStatsOpen(true)}}>
      All FL5 colors stats
    </button>


      <Multiselect
        options={colorOptions}
        selectedValues={selectedColors}
        onSelect={handleColorSelect}
        onRemove={handleColorRemove}
        displayValue="name"
      />
  
      <CivicModal onClose={() => {setData(null)}} data={data}/>
      {statsOpen && (
        <StatsModal
          open={statsOpen}
          onClose={() => {setStatsOpen(false)}}
        />
      )}

      {showTroubleLoading && (
        <TroubleLoading
          toggleTroubleLoading={toggleTroubleLoading}
        />
      )}

      <Map
        setData={setData}
        atDealer={atDealer}
        atTransit={atTransit}
        twoPlus={twoPlus}
        colors={selectedColors}
      />
      <h3 style={{marginLeft: '1rem'}}>Data last refreshed {lastUpdate.toString()}</h3>
    </>
  );
  
};

export default App;
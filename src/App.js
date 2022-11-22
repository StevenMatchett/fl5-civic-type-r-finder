
import React, {useState} from 'react';
import {Map} from './Map';
import {CivicModal} from './Modal'
import dynamic from 'next/dynamic';
import {lastUpdate} from './time'
import { Suspense } from 'react'
import Multiselect from 'multiselect-react-dropdown';

const StatsModal = dynamic(() => import('./StatsModal'), {
  ssr: false,
})
const colors1 = ['Crystal Black Pearl', 'Rallye Red', 'Boost Blue Pearl', 'Championship White', 'Sonic Gray Pearl']
const colors = colors1.map((color,index)=>{
  return {
    name: color,
    id: index,
  }
})

function App() {
  const [data, setData] = useState(null)
  const [statsOpen, setStatsOpen] = useState(false);
  const [selected, setSelected] = useState(colors);
  const [atDealer, setAtDealer] = useState(true);
  const [atTransit, setAtTransit] = useState(true);

  const onSelect = (a,b)=>{
    setSelected(a)
  }
  const onRemove = (a,b) => {
    setSelected(a)
  }

  return (
    <>
      <label>In Transit<input type="checkbox" value={atTransit} checked={atTransit} onChange={()=>{setAtTransit(!atTransit)}} /></label>
      <label>At Dealer<input type="checkbox" value={atDealer} checked={atDealer} onChange={()=>{setAtDealer(!atDealer)}} /></label>
      <button onClick={()=>{setStatsOpen(true)}}>All FL5 colors stats</button>
      <Multiselect
        options={colors} // Options to display in the dropdown
        selectedValues={selected} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        // style={style}
      />
      <form style={{top:"0px", right:"0px", margin:"5px", position:"absolute", zIndex:99999}} action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="E86PQV6YVAE8J" />
        <input type="hidden" name="no_recurring" value="0" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>

      <CivicModal onClose={()=>{setData(null)}} data={data}/>
      {statsOpen && <Suspense>
        <StatsModal open={statsOpen} onClose={()=>{setStatsOpen(false)}} />
      </Suspense>}
      <Map setData={(data)=>{setData(data)}} atDealer={atDealer} atTransit={atTransit} colors={selected} />
      <h3 style={{marginLeft:"1rem"}}>Data last refreshed {lastUpdate.toString()}</h3>
    </>
  );
}

export default App;

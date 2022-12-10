import React from 'react';

const Header = ({toggleTroubleLoading, setStatsOpen}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <b><div class="hidden sm:block">Civic Type R Finder</div></b>
      <div className="flex items-center">
        <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2 btn"
          onClick={() => {setStatsOpen(true)}}>
          All FL5 colors stats
        </button>

        <button onClick={()=>{toggleTroubleLoading()}}className='mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2 btn'>Trouble Loading?</button>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="E86PQV6YVAE8J" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" style={{marginTop: "9px"}} src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" className="btn" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
}

export default Header;

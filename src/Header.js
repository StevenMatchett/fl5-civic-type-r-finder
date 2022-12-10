import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <b><div>Civic Type R Finder</div></b>
      <div className="flex items-center">
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="E86PQV6YVAE8J" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
}

export default Header;

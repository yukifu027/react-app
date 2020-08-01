import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <p>味じまん三ヶ日みかんのお店</p>
            <h2 class="footer-title">おいしいみかんやさん</h2>
          </div>
          <ul className='footer-list'>
            <li>電話番号：000-0000-0000</li>
            <li><a class="footer-map" href="https://goo.gl/maps/74koHigGD1czvpJC8">Map</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;

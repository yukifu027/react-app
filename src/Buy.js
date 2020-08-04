import React from 'react';

class Buy extends React.Component {
  render() {
    return (
      <div className="buy-image">
        <div className="store">
          <p>その1　直接直売所へお越しください</p>
          <img className="store-image" src="お店っぽい建物アイコン (1).png"></img>
        </div>
        <div className="phone">
          <p>その2　電話にて注文をお受けし、銀行口座へお振込</p>
          <img className="phone-image" src="電話の受話器のアイコン素材 その2.png"></img>
        </div>
      </div>
    );
  }
}

export default Buy;
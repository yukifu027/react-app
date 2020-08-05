import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleNumberChange(event){
    const inputNumber = event.target.value;
    this.setState({number: inputNumber});
  }

  totalPrice(number, price){
    const itemPrice = Math.round(number * price * 1.1);
    return itemPrice
  }


  render() {
    return (
      <div className='lesson-card'>
        <p>購入見積もり</p>
        <input
          type="number"
          value={this.state.number}
          onChange={(event) => {this.handleNumberChange(event)}}
        />
        箱
        <p>{this.totalPrice(this.state.number, this.props.price)}円（税込）</p>
      </div>
    );
  }
}

export default Price;

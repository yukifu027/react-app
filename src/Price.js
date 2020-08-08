import React, {useEffect, useState} from 'react';


function Price(props) {
  const [number, setNumber] = useState(0);

  const {name, image, introduction, price, func} = props;

  useEffect(() => {
    func(number); 
  }, [number]);


  const handleNumberChange = (event) => {
    const inputNumber = event.target.value;
    setNumber(inputNumber);
  }

  const totalPrice = (number, price) => {
    const itemPrice = Math.round(number * price * 1.1);
    return itemPrice
  }





  return (
    <div className='lesson-card'>
      <p>購入見積もり</p>
      <input
        type="number"
        value={number}
        onChange={(event) => {handleNumberChange(event)}}
      />
      箱
      <p>{totalPrice(number, price)}円（税込）</p>
    </div>
  );
}

export default Price;

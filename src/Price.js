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



  render() {;
    return (
      <div className='lesson-card'>
        <input
          type="number"
          value={this.state.number}
          onChange={(event) => {this.handleNumberChange(event)}}
        />
        箱
      </div>
    );
  }
}

export default Price;

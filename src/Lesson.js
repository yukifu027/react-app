import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      number: 0,
    };
  }

  handleClickLesson() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  handleNumberChange(event){
    const inputNumber = event.target.value;
    this.setState({number: inputNumber});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <div
          className='lesson-item'
          onClick={() => {this.handleClickLesson()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
          <p>{this.props.price}</p>
        </div>
        <input
          type="number"
          value={this.state.number}
          onChange={(event) => {this.handleNumberChange(event)}}
        />
        {modal}
      </div>
    );
  }
}

export default Lesson;

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
              onClick: this.handleDecrement,
              className: 'm-2 py-2 px-4 bg-blue-500 text-white rounded',
            },
            '-',
        ),
        React.createElement(
            'span',
            { className: 'text-white' },
            this.state.value,
        ),
        React.createElement(
            'button',
            {
              onClick: this.handleIncrement,
              className: 'm-2 py-2 px-4 bg-blue-500 text-white rounded',
            },
            '+',
        ),
    );
  }
}

export default Counter;

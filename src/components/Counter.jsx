import { Component } from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('props:', props);
    this.state = {
      counterValue: props.initialValue,
    };
  }

  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  handleDecrement = () => {
    console.log('Clicked [-]!');
    this.setState(prevState => {
      console.log('prevState: ', prevState);
      return {
        counterValue: prevState.counterValue - this.props.step,
      };
    });
  };

  handleIncrement = () => {
    console.log('Clicked [+]!');
    this.setState(prevState => {
      console.log('prevState: ', prevState);
      return {
        counterValue: prevState.counterValue + this.props.step,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Counter:{this.state.counterValue}</h2>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

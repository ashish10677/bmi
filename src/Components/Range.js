import React, { Component } from 'react';
import App from '../App';

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : props.value
    }
  }

  static defaultProps = {
    min : 0,
    max : 245,
    step : 1
  }
  
  onChange(event) {
    //console.log(event.target.value);
    this.props.onChange(this.state.value);
    this.setState({value:event.target.value});
  }
  render() {
    return (
      <div className="range">
        <input type="range" value={this.state.value} max={this.props.max} min={this.props.min} step={this.props.step} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
export default Range;

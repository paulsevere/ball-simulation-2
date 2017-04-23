import React, {Component} from 'react';
import {connect} from 'react-redux';
import Circles from './components/circles';
import * as d3 from 'd3';
window.d3 = d3;
class App extends Component {
  render() {
    const {nodes, dispatch} = this.props;
    return (
      <div onClick={e => dispatch({type: 'PAUSE'})} className="App">
        <Circles circles={nodes} />
      </div>
    );
  }
  componentDidMount() {
    return requestAnimationFrame(t => {
      console.log(t);
      this.props.dispatch({type: 'TICK', t});
    });
  }
  componentWillUpdate({pause}) {
    if (pause) {
      return;
    }
    return requestAnimationFrame(t => {
      console.log(t);
      this.props.dispatch({type: 'TICK', t});
    });
  }
}

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const mapStateToProps = (state, ownProps = {}) => {
  return {...state, ...ownProps};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

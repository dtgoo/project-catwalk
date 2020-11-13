import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import relatedItems_comparison from './components_relatedItems_comparison/relatedItems_comparison.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <relatedItems_comparison/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

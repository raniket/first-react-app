import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Raniket', age: '23', belt: 'black', id: '1' },
      { name: 'Logan', age: '100', belt: 'yellow', id: '2' },
      { name: 'Ninja', age: '13', belt: 'pink', id: '3' },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>I Am Parent Component!</h1>
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
    );
  }
}

export default App;

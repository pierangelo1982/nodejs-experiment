import React, { Component} from 'react';
//import './App.css';

class App extends Component {

  render() {

    return React.createElement(
          'div', {className: 'App'}, 
          React.createElement(
            'h2', null, 'Hi|, I\'m a React App!'
          )
      )

  }

}

export default App;
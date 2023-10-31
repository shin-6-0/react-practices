import React, {Component} from 'react';
import Header from './Header';
import Contents from './Contents';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Component/>
      </div>
    );
  }
}

export default App;
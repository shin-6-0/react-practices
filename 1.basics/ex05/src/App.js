import React from 'react';

function App() {
  //const App = document.createElement('div');
  //App.textContent = "Hello Wolrd";

  const App = React.createElement('div',null,'Hello World2');
  return App;
}

export {App};
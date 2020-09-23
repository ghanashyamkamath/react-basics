import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Greet name="ghanashyam" />
      
      <Greet name="kiran" />
      <Greet name="manu" />

      {/* <Welcome name="ghanashyam" />
      <Welcome name="Kiran" />
      <Welcome name="Manu" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter addValue={5}/> */}
    </div>
  );
}

export default App;

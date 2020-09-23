import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name="ghanashyam" >
      this is child prop
      </Greet>
      <Greet name="kiran" />
      <Greet name="manu" />

      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;

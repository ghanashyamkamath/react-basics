import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
      {/* <Greet name="ghanashyam" />
      
      <Greet name="kiran" />
      <Greet name="manu" /> */}

      {/* <Welcome name="ghanashyam" />
      <Welcome name="Kiran" />
      <Welcome name="Manu" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter addValue={5}/> */}

      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
    </div>
  );
}

export default App;

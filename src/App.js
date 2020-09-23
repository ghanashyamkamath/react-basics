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
import Stylesheet from './components/Stylesheet';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

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
      {/* <NameList /> */}
      <Stylesheet primary={true}/>
    </div>
  );
}

export default App;

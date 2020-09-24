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
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragementsDemo from './components/FragementsDemo';
import PureComp from './components/PureComp';
import ParentComponentssss from './components/ParentComponentssss';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Count from './components/Count';
function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

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
      {/* <Stylesheet primary={true}/> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragementsDemo /> */}
      {/* <ParentComponentssss /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParent /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}

      <Count
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      />
      <Count
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      />

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Ghanashyam' : 'Guest' }/> */}
    </div>
  );
}

export default App;

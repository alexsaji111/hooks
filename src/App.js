import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounteruseEffect from './components/HookCounteruseEffect';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetch from './components/DataFetch';

export const userContext = React.createContext()
export const channelContext = React.createContext()

function App() {

  return (
    <div className="App">
      <userContext.Provider value={'alex'}>
        <ComponentC/>
      </userContext.Provider>
      {/* <DataFetch/> */}
      {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <HookCounteruseEffect/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
     {/* <ClassCounter/> */}
    </div>
  );
}

export default App;

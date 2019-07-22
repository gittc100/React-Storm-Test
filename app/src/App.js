import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleExample from "./components/simpleExample";
import CustomExample from "./components/custom/CustomExampleIndex";

function App() {
  return (
    <div className="App">
      <div className="seperator">
        <SimpleExample/>
      </div>
        <div className="seperator">
        {/* <CustomExample/> */}
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import SimpleExample from "./components/DefaultNode/simpleExample";
// import CustomExample from "./components/CustomNode/customEG";

function App() {
  return (
    <div className="App">
      <div className="seperator">
        <SimpleExample/>
      </div>
        <div className="seperator">
        {/* <CustomExample /> */}
        </div>
    </div>
  );
}

export default App;
import React from 'react'
import './App.css'
import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div className="App">
    <CalculateScore Name={"Steeve"} 
    School={"DNV Public School"}
    total={284}
    goal={3}/>
    </div>
  );
}

export default App;

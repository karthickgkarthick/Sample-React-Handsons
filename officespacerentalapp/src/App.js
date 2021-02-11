import React from 'react';
import './App.css';
import { ListofItem } from './components/ListofItem';

function App() {
  const element="Office Space";
  const jsxattr=<img src="https://www.oneco.work/img/plan/mumbai.jpg" width="25%" height="25%" alt="Office Space"/>
  const ItemName=[{Name:"DBS",Rent:50000,Address:"Chennai"},
  {Name:"KBS",Rent:60000,Address:"Bangalore"},
  {Name:"CBS",Rent:70000,Address:"Mumbai"}];
  return (
    <div className="App">
       <h1>{element},At Affordable Range</h1>
       {jsxattr}
       <ListofItem item={ItemName}/>
    </div>
  );
}

export default App;

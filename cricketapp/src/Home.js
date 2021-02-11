
import { React } from "react";
import  OddNumber from "./OddNumber";
import { EvenPlayers } from "./EvenPlayers";
import  ListofPlayers  from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import ListOfIndianPlayers from "./ListOfIndianPlayers";
import { IndianPlayers } from "./IndianPlayers";

function Home() {
const IndianTeam=["Sachin1","Dhoni2","Virat3","Rohit4","yuvraj5","Raina6"];



const players=[
{name:"Sachin",Score:80},
{name:"Virat",Score:100},
{name:"Gibbs",Score:70},
{name:"Kl",Score:40},
{name:"samson",Score:30},
{name:"dravid",Score:90},
{name:"ponting",Score:80},
{name:"lara",Score:60},
{name:"christian",Score:30},
{name:"tambe",Score:10},
{name:"rahul",Score:120},];

const changeFlag=()=>{
  return flag=false;
}
var flag=false;

  if(flag==true)
  {
    return (
      <div>
      <div className="Home">
        <h1>OddPlayers</h1>
        {OddNumber(IndianTeam)}
        <hr></hr>
        <h1>EvenPlayers</h1>
      {EvenPlayers(IndianTeam)}
      </div>
      <hr></hr>
      <div>
        <h1>List Of Indian Players Merged!!!</h1>
<ListOfIndianPlayers IndianPlayers={IndianPlayers}/>
      </div>
      
      </div>
    
    );
  }

  else{
    return(
      <div>
        <h1>List Of players</h1>
        <ListofPlayers players={players}/>
        <hr/>
        <h1>List of players having scores less than 70</h1>
        <Scorebelow70 players={players}/>
       
      </div>
      
    )
  }

 
}

export default Home;

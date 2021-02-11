import React from 'react';
import GuestGreeting from './components/GuestGreeting';
import UserGreeting from './components/UserGreeting';


function Greeting(props){
let isloggedIn=props.islogged;
            if(isloggedIn){
                return <UserGreeting/>
            }
            else{
                return <GuestGreeting/>
            }
  
}
export default Greeting;
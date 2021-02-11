import React, { Component } from 'react';
import Greeting from './Greeting';
import './Home.css';


class Home extends Component{
    state={islogged:false}

    loginHandler=()=>{
        this.setState({islogged:true})
    }
    guestHandler=()=>{
        this.setState({islogged:false})
    }

    render(){
           let logprops=this.state.islogged;
       if(logprops===false){
           return(
               <div className="Home">
           <Greeting islogged={logprops}/>
           <button onClick={this.loginHandler}>Login</button> 
             </div>
           )
       }
       else{
        return(
            <div className="Home">
        <Greeting islogged={logprops}/>
        <button onClick={this.guestHandler}>SignOut</button> 
          </div>
        )
       }

    }
}
export default Home;
import React, { Component } from 'react'

export class GetUser extends Component {
  
state={
    person:[],
    loading:null
}

    

    async componentDidMount(){
           const url="https://api.randomuser.me/"; 
           const response=await fetch(url);
           const data=await response.json();
           this.setState({person:data.results[0].picture.large,loading:false});
           console.log(data.results[0]);
    }
    render(){
       const s=this.state.person
    return (
        <div>
           <h1>Mr Donato Nunes</h1>
           <img src={s}/>
    
        </div>
       
    )
    }
}

export default GetUser

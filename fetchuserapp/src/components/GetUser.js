import React, { Component } from 'react'

export class GetUser extends Component {
  
state={
    pic:"",
    name:[],
    loading:null
}

    

    async componentDidMount(){
           const url="https://api.randomuser.me/"; 
           const response=await fetch(url);
           const data=await response.json();
           this.setState({name:data.results[0].name,loading:false});
           this.setState({pic:data.results[0].picture.large,loading:false});
           console.log(data.results[0]);
    }
    render(){
       const s=this.state.pic;
    return (
        <div>
           <h1>{this.state.name.title} {this.state.name.first} {this.state.name.last}</h1>
           <img src={s}/>
    
        </div>
       
    )
    }
}

export default GetUser

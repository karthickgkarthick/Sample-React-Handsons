import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import './GetUsers.css'

export class GetUser extends Component {
constructor(props){
    super(props);
this.state={
    person:[],
    loading:true
}
}
    

    async componentDidMount(){
           const url="https://api.randomuser.me/"; 
           const response=await fetch(url);
           const data=await response.json();
           this.setState({person:data.results[0],loading:false});
           console.log(data.results[0]);
    }
    render(){
      const nav=(<Navbar style={{backgroundColor:'black',height:"75px"}} className="row justify-content-center"><h3 style={{color:'red'}}>Find People!!</h3></Navbar>)
        if(this.state.loading==true){
           return("loading")
        }
     else{
         return(
               <div>
                   {nav}<br/>
           <h1 style={{fontFamily:'Serif'}}>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</h1> 
           <img src={this.state.person.picture.large}/><br/><br/>
           <h4><b>Age:</b>{this.state.person.dob.age}</h4>
           <h6><b>email:</b>{this.state.person.email}</h6>
           <h4><b>Gender:</b>{this.state.person.gender}</h4>
           <h4><b>Phone-No:</b>{this.state.person.phone}</h4>
           <h4><b>City:</b>{this.state.person.location['city']}</h4>

           </div>
           )
     }
   
    }
}

export default GetUser

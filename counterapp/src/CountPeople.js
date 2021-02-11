import {React,Component} from 'react';
import './CountPeople.css';

export class Countpeople extends Component{


    constructor(){
        super();
        this.state={
            entrycount:0,
            exitcount:0,
            c:0
        };
    }
    updateEntry=()=>{
        this.setState((prevState,props)=>{
            return {entrycount:prevState.entrycount+1}
        })
    }
    updateExit=()=>{
        this.setState((prevState,props)=>{
            return {exitcount:prevState.exitcount+1}
        })
    }


    render(){
        return(
             <div className="count">   
             <div className="container">
                 <div className="row">
                     <div className="col-md-6">
                     <button onClick={this.updateEntry} className="btn">Login</button>
                   {this.state.entrycount} people Entered!!!
                     </div>
                     <div className="col-md-6">
                     <button onClick={this.updateExit} className="btn">Exit</button>
                   {this.state.exitcount} people Exit!!!
                     </div>
                 </div>
                 </div>   
                 
                  
                   
                   </div>

            


        );
    }
}
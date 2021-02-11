import {React,Component } from 'react';
import './App.css';

export class App extends Component {

  state={
  count:0,
  amount:0,
  currency:null
  };
  incrementHandler=()=>{
    this.setState((prevState,props)=>{
        return {count:prevState.count+1}
    })
}
decrementHandler=()=>{
  this.setState((prevState,props)=>{
      return {count:prevState.count-1}
  })
}
welcomeAlerhandler=(val)=>{
  alert(val);
}
clickHandler=(val)=>{
  alert(val);
 
 
}
onSubmit=(event)=>{
  event.preventDefault();
  let convertedAmount=this.state.amount*88.24;
  alert("Converting to "+this.state.currency+" Amount is "+convertedAmount);
}
handleAmountchange=(event)=>{
  event.preventDefault();
  this.setState({amount:event.target.value})
}
handleCurrencychange=(event)=>{
  event.preventDefault();
  this.setState({currency:event.target.value})
}

render(){
  const form=(
    <form onSubmit={this.onSubmit}>
      <table>
        <tr>
          <td>Amount:</td>
          <td><input type="number" onChange={this.handleAmountchange}/></td>
          </tr>
          <tr>
           
            <td>Currency:</td>
            
            <td><input type="text" onChange={this.handleCurrencychange}/></td>
          </tr>
          </table>
     
      
      <button type="submit" style={{marginLeft:"120px"}}>Submit</button>
    </form>
  )

  return (
    <div className="App">
      {this.state.count}<br/>
     <button onClick={this.incrementHandler}>Increment</button><br/>
     <button onClick={this.decrementHandler}>Decrement</button><br/>
     <button onClick={()=>this.welcomeAlerhandler("Welcome")}>Say Welcome</button><br/>
     <button onClick={()=>this.clickHandler("I was clicked")}>Click on me</button><br/><br/>
<h2 style={{color:'green'}}>Currency Convertor!!!</h2>
{form}


    </div>
  );
}
}
export default App;

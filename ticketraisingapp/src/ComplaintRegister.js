import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './ComplaintRegister.css'

export class ComplaintRegister extends Component 
{

state={
    ename:"",
    complaint:"",
    Numberholder:Math.floor(Math.random()*1000)
    
};
onSubmit=(event)=>{
event.preventDefault();
var msg='Thanks '+this.state.ename+'\n Your Complaint was Submitted'+'\n TransactionID is '+
this.state.Numberholder;
alert(msg);
}



handleName=(event)=>{
event.preventDefault();
this.setState({[event.target.name]:event.target.value});
}
handleComplaint=(event)=>{
    event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
}
    render()
    {

   const form=( 
       <Container>
               <Form onSubmit={this.onSubmit}>
        <table>
            <tr>
                <td>Name:</td>
                <td><Form.Control type="text"  name="ename" onChange={this.handleName}/></td>
            </tr>
            <tr>
                <td>Complaint:</td>
                <td><Form.Control type="text"   name="complaint" onChange={this.handleComplaint}/></td>
            </tr>
        </table>
        <Button type="submit" className="btn btn-primary">submit</Button>

    </Form>
    </Container>

    )
  return (
      <div>
        
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

<div className="ComplaintRegister">
            <h1>Register your complaints here!!!</h1>
            {form}
        </div>
         </div>
    )
    }
}

export default ComplaintRegister

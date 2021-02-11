import React from 'react';



import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class EmployeeForm extends React.Component {

constructor() {

super();

this.state = {

entities: {},

errors: {}

}

this.handleChange = this.handleChange.bind(this);

this.EmployeeForm = this.EmployeeForm.bind(this);

};

handleChange(e) {

let entities = this.state.entities;

entities[e.target.name] = e.target.value;

this.setState({

entities

});

}

EmployeeForm(e) {

e.preventDefault();

if (this.validateemployee()) {

let entities = {};

entities["EmployeeName"] = "";

entities["Email"] = "";

this.setState({entities:entities});

alert("Employee Details Save Successully");

}

}

validateemployee() {

let entities = this.state.entities;

let errors = {};

let IsValid = true;

if (!entities["EmployeeName"]) {

IsValid = false;

errors["EmployeeName"] = "Employee name is Required";

}

if (!entities["Email"]) {

IsValid = false;

errors["Email"] = "Email is Required";

}

if (typeof entities["Email"] !== "#ff0000") {

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

if (!pattern.test(entities["Email"])) {

IsValid = false;

errors["Email"] = "Email is not Valid";

}

}

this.setState({

errors: errors

});

return IsValid;

}

render() {

return (

<div className="app flex-row align-items-center">

<Container>

<Row className="justify-content-center">

<Col md="9" lg="7" xl="6">

<Card className="mx-4">

<CardBody className="p-4">

<Form method="post" name="EmpForm" onSubmit= {this.EmployeeForm}>

<div class="row" className="mb-2 pageheading">

<div class="col-sm-12 btn btn-primary">

Registeration Form

</div>

</div>

<Input type="text" className="mrgn" name="EmployeeName" value={this.state.entities.EmployeeName} onChange={this.handleChange} placeholder="Enter Employee name" />

<div className="errorMsg">{this.state.errors.EmployeeName}</div>

<Input type="text" className="mrgn" name="Email" value={this.state.entities.Email} onChange={this.handleChange} placeholder="Enter Email" />

<div className="errorMsg">{this.state.errors.Email}</div>

<Button type="submit" color="success" block >Register</Button>

</Form>

</CardBody>

</Card>

</Col>

</Row>

</Container>

</div>

);

}

}

export default EmployeeForm;
import React, { Component } from 'react';
import '../bootstrap.min.css';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      address2: "",
      showFirstNameErrorLabel: false,
      showLastNameErrorLabel: false,
      showAddressErrorLabel: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    event.target.className += " was-validated";
    alert(
      this.state.firstName +   
      "\n" + this.state.lastName + 
      "\n" + this.state.address + 
      "\n" + this.state.address2
  );

  if(this.state.firstName === "") {
    this.setState({
      showFirstNameErrorLabel : true});
  }
  if(this.state.lastName === "") {
    this.setState({
      showLastNameErrorLabel : true});
  }
  if(this.state.address === "") {
    this.setState({
      showAddressErrorLabel : true});
  }
  }
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, this.updateLabelForInput(event.target.name, event.target.value));
  }
  updateLabelForInput(inputName, inputValue) {
    if(inputValue === "") {
      return;
  }

  if(inputName === "firstName" && this.state.showFirstNameErrorLabel)
  {
    this.setState({
      showFirstNameErrorLabel: false
    });
  }
  if(inputName === "lastName" && this.state.showLastNameErrorLabel)
  {
    this.setState({
      showLastNameErrorLabel: false
    });
  }
  if(inputName === "address" && this.state.showAddressErrorLabel)
  {
    this.setState({
      showAddressErrorLabel: false
    });
  }
}

  render() {
    return (
      <div className="col-md-5" id="formPage">
      <form id="formElement"
      className="needs-validation"
      onSubmit={this.handleSubmit}
      noValidate>
        <InputField 
          fieldName="first name"
          showErrorLabel = {this.state.showFirstNameErrorLabel}
          fieldID = "inputFirstName"
          inputName = "firstName"
          fieldValue = {this.state.firstName}
          onFieldChange = {this.onFieldChange}
          isRequired = {true}
        />
        <InputField 
          fieldName="last name"
          showErrorLabel = {this.state.showLastNameErrorLabel}
          fieldID = "inputLastName"
          inputName = "lastName"
          fieldValue = {this.state.lastName}
          onFieldChange = {this.onFieldChange}
          isRequired = {true}
        />
        <InputField 
          fieldName="address"
          showErrorLabel = {this.state.showAddressErrorLabel}
          fieldID = "inputAddress"
          inputName = "address"
          fieldValue = {this.state.address}
          onFieldChange = {this.onFieldChange}
          isRequired = {true}
        />
         <InputField 
          fieldName="address 2"
          showErrorLabel = {false}
          fieldID = "inputAddress2"
          inputName = "address2"
          fieldValue = {this.state.address2}
          onFieldChange = {this.onFieldChange}
          isRequired = {false}
        />
        <button type="submit" id="nextBtn" className="btn" >
          Next <img id="arrowImg" src="./assets/White_Arrow.svg" alt="white arrow"/>
        </button>
      </form>      
      </div>
    );
  }
}

const InputField = (props) =>{
  return (
    <div className="form-group">
      <label className="inputLabel">{props.fieldName}</label>
      <span className={props.showErrorLabel ? "feedbackYes" : "feedbackNo"}>required</span>
      <input type="text" className="form-control" required={props.isRequired} id={props.fieldID} name={props.inputName} value={props.fieldValue} onChange={props.onFieldChange}/>
    </div>
  );
}


export default Form;


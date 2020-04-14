import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }
  handleFormChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };
  handleResetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };
  handleSubmit = (event) => {
    event.preventdefault();
    this.setState({
      submitted: true,
    });
  };
  render() {
    if (this.state.submitted) {
      return (
        <React.Fragment>
          <div className="Contact">
            <p>
              Thank you, {this.state.formData.firstName}, for submitting our
              form!
            </p>
          </div>
          <button onClick={this.handleResetForm}>Reset The Form</button>
        </React.Fragment>
      );
    }
    return (
      <div ClassName="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">First name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleFormChange}
            />
          </div>
          <button>Submit Form</button>
        </form>
        <div>
          {this.state.formData.firstName}
          <br />
          {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact;

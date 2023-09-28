import React, { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailNameChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            value={enteredFirstName}
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={enteredLastName}
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailNameChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

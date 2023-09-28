import React, { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [firstNameTouch, setFirstNameTouch] = useState(false);
  const [lastNameTouch, setLastNameTouch] = useState(false);
  const [emailTouch, setEmailTouch] = useState(false);

  const firstNameIsValid = enteredFirstName.trim() !== "";
  const lastNameIsValid = enteredLastName.trim() !== "";
  const emailIsValid = enteredEmail.includes("@");

  const firstNameInputTouch = !firstNameIsValid && firstNameTouch;
  const lastNameInputTouch = !lastNameIsValid && lastNameTouch;
  const emailInputTouch = !emailIsValid && emailTouch;

  let formIsVaild = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsVaild = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid && !lastNameIsValid && emailIsValid) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");

    setFirstNameTouch(false);
    setLastNameTouch(false);
    setEmailTouch(false);
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

  const firstNameBlurHandler = () => {
    setFirstNameTouch(true);
  };

  const lastNameBlurHandler = () => {
    setLastNameTouch(true);
  };

  const emailBlurHandler = () => {
    setEmailTouch(true);
  };

  const firstNameInputValid = firstNameInputTouch
    ? "form-control invalid"
    : "form-control";

  const lastNameInputValid = lastNameInputTouch
    ? "form-control invalid"
    : "form-control";

  const emailInputValid = emailInputTouch
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputValid}>
          <label htmlFor="firstName">First Name</label>
          <input
            value={enteredFirstName}
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputTouch && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputValid}>
          <label htmlFor="lastName">Last Name</label>
          <input
            value={enteredLastName}
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputTouch && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputValid}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailNameChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputTouch && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsVaild}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

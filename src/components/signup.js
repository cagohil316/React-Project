import React, { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  var getCityValue = city.options[city.selectedIndex].value;
  const [genderValue, setGenderValue] = useState("");
  var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [error, setError] = useState(null);

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [emailIdError, setEmailIdError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [DOBError, setDOBError] = useState(null);
  const [addressError, setAddressError] = useState(null);
  const [cityError, setCityError] = useState(null);
  const [genderValueError, setGenderValueError] = useState(null);


 
  /*const ValidateDOB = () => {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("txtDate").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
      var parts = dateString.split("/");
      var dtDOB = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
      var dtCurrent = new Date();
      lblError.innerHTML = "Eligibility 18 years ONLY.";
      if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        return false;
      }

      if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
        //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
          return false;
        }
        if (dtCurrent.getMonth() == dtDOB.getMonth()) {
          //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
          if (dtCurrent.getDate() < dtDOB.getDate()) {
            return false;
          }
        }
      }
      lblError.innerHTML = "";
      return true;
    } else {
      lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY.";
      return false;
    }
  };*/

  const SignUpHandler = () => {
    //const [data ,setData] = useState([]);

    let data = [];
    data.push(firstName, lastName, phoneNumber, emailId, username, password, DOB, address, city, genderValue);
    console.log(data); 
    
    if (firstName.length <= 3) {
       setFirstNameError("Enter Valid First Name");
    }else if (lastName.length <= 3) {
      setLastNameError("Enter a Valid Last Name");
    } else if (phoneNumber.length !== 10 || phoneNumber.value == "") {
      setPhoneNumberError("Enter a Valid Phone Number");
    } else if (!emailId.match(validRegex)) {
      setEmailIdError("Enter a Valid Email Address");
    } else if (username.length <= 0) {
       setUsernameError("Enter a Valid Username");
    } else if (password.length <= 0) {
        setPasswordError("Enter a Valid Password");
    } else if (DOB.length <= 0) {
        setDOBError("Enter a Valid Date Of Birth");
    } else if (address.length <= 0) {
        setAddressError("Enter a Valid Address");
    } else if (getCityValue == "0") {
        setCityError("Please Choose Your City");
    } else if (genderValue == null) {
        setGenderValueError("Please Choose Your Gender");
    } else {
        setError("Successfully Registration");
    }

    /*var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    const phoneNumber = document.getElementById("phone").value;
    let emailId = document.getElementById("email").value;
    
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const DOB = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    var city = document.getElementById("city");
    var getCityValue = city.options[city.selectedIndex].value;
    // alert("value = "+ getCityValue);
    const genderValue = document.querySelector('input[name="gender"]:checked');


    document.getElementById("firstNameStatus").innerHTML = null;
    document.getElementById("lastNameStatus").innerHTML = null;
    document.getElementById("mobileStatus").innerHTML = null;
    document.getElementById("emailStatus").innerHTML = null;
    document.getElementById("userNameStatus").innerHTML = null;
    document.getElementById("passwordStatus").innerHTML = null;
    document.getElementById("DOBStatus").innerHTML = null;
    document.getElementById("addressStatus").innerHTML = null;
    document.getElementById("cityStatus").innerHTML = null;
    document.getElementById("genderStatus").innerHTML = null;
    document.getElementById("checkStatus").innerHTML = null;


    if (firstName.length <= 3) {
      setFistNameError("Enter Valid First Name");
    } else if (lastName.length <= 3) {
      document.getElementById("lastNameStatus").innerHTML =
        "Enter a Valid Last Name";
    } else if (phoneNumber.length !== 10 || phoneNumber.value == "") {
      document.getElementById("mobileStatus").innerHTML =
        "Enter a Valid Phone Number";
    } else if (!emailId.match(validRegex)) {
      document.getElementById("emailStatus").innerHTML =
        "Enter a Valid Email Address";
    } else if (userName.length <= 0) {
      document.getElementById("userNameStatus").innerHTML =
        "Enter a Valid Username";
    } else if (password.length <= 0) {
      document.getElementById("passwordStatus").innerHTML =
        "Enter a Valid Password";
    } else if (DOB.length <= 0) {
      document.getElementById("DOBStatus").innerHTML =
        "Enter a Valid Date Of Birth";
    } else if (address.length <= 0) {
      document.getElementById("addressStatus").innerHTML =
        "Enter a Valid Address";
    } else if (getCityValue == "0") {
      document.getElementById("cityStatus").innerHTML =
        "Please Choose Your City";
    } else if (genderValue == null) {
      document.getElementById("genderStatus").innerHTML =
        "Please Choose Your Gender";
    } else {
      document.getElementById("checkStatus").innerHTML =
        "Successfully Registration";
    }*/
  };

  return (
    <div>
      <div>
        <div className="Form">
          <form>
            <div className="row">
              <h3 className="text-center">Sign Up</h3>
              <p className="text-center pb-5">Use Your correct credentials</p>

              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    First&nbsp;Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    required
                    onChange={
                      (e) => {
                        setFirstName(e.target.value);
                      }
                    }
                    className="form-control"
                    id="firstname"
                    aria-describedby="emailHelp"
                  />
                  <label
                    value={firstNameError}
                    id="firstNameStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={
                      (e) => {
                        setLastName(e.target.value);
                      }
                    }
                    className="form-control"
                    id="lastname"
                    aria-describedby="emailHelp"
                  />
                  <label
                  value={lastNameError}
                    id="lastNameStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="number"
                    value={phoneNumber}
                    onChange={
                      (e) => {
                        setPhoneNumber(e.target.value);
                      }
                    }
                    className="form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                  />
                  <label
                    id="mobileStatus"
                    value={phoneNumberError}
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email-Id
                  </label>
                  <input
                    type="email"
                    value={emailId}
                    onChange={
                      (e) => {
                        setEmailId(e.target.value);
                      }
                    }
                    required
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <label
                  value={emailIdError}
                    id="emailStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={
                      (e) => {
                        setUsername(e.target.value);
                      }
                    }
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                  />
                  <label
                    id="userNameStatus"
                    value={usernameError}
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={
                      (e) => {
                        setPassword(e.target.value);
                      }
                    }
                    className="form-control"
                    id="password"
                  />
                  <label
                  value={passwordError}
                    id="passwordStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    value={DOB}
                    className="form-control"
                    id="dob"
                  />
                  <label
                  value={DOBError}
                    id="DOBStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    value={address}
                    rows="1"
                    onChange={
                      (e) => {
                        setAddress(e.target.value);
                      }
                    }
                    id="address"
                    aria-label="With textarea"
                  ></textarea>
                  <label
                  value={addressError}
                    id="addressStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    City
                  </label>
                  <select
                    type="text"
                    value={city}
                    onChange={
                      (e) => {
                        setCity(e.target.value);
                      }
                    }
                    className="form-control"
                    id="city"
                  >
                    <option value="0">option</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Rajkot">Rajkot</option>
                  </select>
                  <label
                  value={cityError}
                    id="cityStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4">
                <label className="form-check-label mb-2" for="exampleCheck1">
                  Gender
                </label>
                <div className="mb-3 d-flex justify-content-between pt-2">
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value={genderValue}
                      onChange={
                        (e) => {
                          setGenderValue(e.target.value);
                        }
                      }
                    />{" "}
                    Male <br />
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                    />{" "}
                    Female <br />
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="other"
                      value="Other"
                    />{" "}
                    Other
                  </div>
                </div>
                <label
                value={genderValueError}
                  id="genderStatus"
                  className="form-label lableStatus"
                ></label>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4 align-items-center d-flex">
                <button
                  onClick={SignUpHandler}
                  type="button"
                  className="btn btn-primary w-100"
                >
                  Sign Up
                </button>
              </div>
              <div className="col-12 col-md-4 col-lg-4 px-4 align-items-center d-flex">
                <label
                value={error}
                  id="checkStatus"
                  className="form-label checkStatus"
                ></label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

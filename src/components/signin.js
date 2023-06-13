import React from "react";

function SignIn() {

  const login = ()=> {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    document.getElementById("userNameStatus").innerHTML = null;
    document.getElementById("passwordStatus").innerHTML = null;
  
    if (userName.length <= 0) {
      document.getElementById("userNameStatus").innerHTML =
        "Enter a Valid Username";
    } else if (password.length <= 0) {
      document.getElementById("passwordStatus").innerHTML =
        "Enter a Valid Password";
    } else {
      document.getElementById("checkStatus").innerHTML = "Successfully Login";
    }
  }
  

  return (
    <div>
      <div>
        <div className="Form d-flex justify-content-center">
          <div className="containerBox">
            <h3 className="text-center">Sign In</h3>
            <p className="text-center pb-2">Use Your React World Account</p>
            <form>
              <div className="">
                <div className="">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                  />
                  <label
                    id="userNameStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <div className="">
                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                  <label
                    id="passwordStatus"
                    className="form-label lableStatus"
                  ></label>
                </div>
              </div>
              <button
                type="button"
                onClick={login}
                className="btn btn-primary w-100 mt-2"
              >
                Login
              </button>
              <div className="align-items-center d-flex justify-content-center">
                <small id="checkStatus" className="form-label checkStatus"></small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import React from "react";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="banner">
      <div class="heading text-center">
        <h1 className="m-3">Welcome To The React World</h1>
        <p className="m-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          excepturi asperiores quisquam nihil. Laudantium harum at quo vitae
          illum incidunt deleniti possimus atque esse. Ullam voluptas,
          asperiores sed hic porro laborum dolores quod sint id esse eveniet
          delectus soluta nostrum dolor minus culpa magnam dignissimos
          doloremque praesentium, voluptate, molestias numquam!
        </p>
        <div className="d-flex"></div>
        <Link to="signin" className="m-3">
          <button className="btn btn-primary rounded">Sign In</button>
        </Link>
        <Link to="signup"> 
          <button className="btn btn-primary rounded">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default home;

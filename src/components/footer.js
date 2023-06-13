import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpg"

function footer() {
  return (
    <div>
      <footer className="">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
            <div className="info">
              <div className="logo mb-2 d-flex justify-content-center">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="text-center">
              <div className="callNum">+91 9898711078</div>
              <div className="address">
                625, sorabji compaund, <br /> junavadaj, ahmedabad
              </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
            <div className="link m-auto">
              <h5 className="mb-3 text-center"> Useful Links</h5>
              <Link to="/">
                <h6>Home</h6>
              </Link>
              <Link to="signIn">
                <h6>Sign In</h6>
              </Link>
              <Link to="signup">
                <h6>Sign Up</h6>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14684.38182888997!2d72.5666775!3d23.0569617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8480b0994931%3A0x762c88ae41ecccb0!2sSorabji%20Compound%20Municipal%20Garden!5e0!3m2!1sen!2sin!4v1680503758707!5m2!1sen!2sin"
                width="200"
                height="130"
                title="map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <p className="text-center footerP">
          Copyright © 2023. Design by&nbsp;
          <Link target="_blank" to="/">
            CHIRAG GOHIL
          </Link>
        </p>
      </div>
    </div>
  );
}

export default footer;

import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./Login.css";
import bxt_img from "../resources/bxt_img.png";
import copyright from "../resources/copyright.png";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  // const history = useHistory();
  const [email, setActiveTab] = useState("");

  const [activePassword, setActivePassword] = useState(0);

  const coursesPage = () => {
    if (activePassword) {
      // history.push("/Dashboard");
    } else {
      setActivePassword(1);
    }
  };

  const Password = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        paddingRight: "5%",
      }}
    >
      <label
        className="input_lbl"
        style={{ color: "white", height: "20px" }}
        for="fname"
      >
        Password
      </label>
      <input
        type="password"
        style={{ height: "40px" }}
        id="pwd"
        name="pwd"
      ></input>
    </div>
  );

  return (
    <div className="login">
      <img className="bxt_img" src={bxt_img} />
      <div className="info">
        <p>Sharesource Information</p>
      </div>
      <div className="input">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            paddingRight: "5%",
          }}
        >
          <label
            className="input_lbl"
            style={{ color: "white", height: "20px" }}
            for="fname"
            value = {email}
          >
            Email Address
          </label>
          <input
            style={{ height: "40px" }}
            type="text"
            id="fname"
            name="fname"
          ></input>
        </div>
        {activePassword ? <Password /> : null}
        <button
          variant="success"
          style={{ width: "10%", marginTop: "20px" }}
          className="login_btn"
          onClick={coursesPage}
        >
          {activePassword ? "Login" : "Next"}
        </button>
      </div>
      <div className="Privacy">
        Use of this system is subject to Baxter's Privacy Policy/Terms and
        Conditions.
      </div>
      <img className="bxt_img" src={copyright} />
    </div>
  );
}

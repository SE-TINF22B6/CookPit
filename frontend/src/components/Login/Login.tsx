import "../Login/Login.css";
import React, { useState } from "react";
import icon_user from "../../img/icon_user.png";
import icon_password from "../../img/icon_password.png";
import Axios from "axios";
import { response } from "express";

function Login() {
  let [LoginStatus, setLoginStatus] = useState("");

  const registeruser = () => {
    Axios.post("http://localhost:3001/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data.loginmessage);
      setLoginStatus(response.data.loginmessage)
    });
  };

  const loginuser = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.loginmessagge) {
        setLoginStatus(response.data.message)

      }
    })
  }

  const [isToggled, setIsToggled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleToggle = () => {
    setIsToggled(!isToggled);
    setLoginStatus("");
  };

  let ueberschrift;
  let clickevent;
  if (isToggled === false) {
    ueberschrift = "Login";
    clickevent = loginuser;
  } else {
    ueberschrift = "Registrieren";
    clickevent = registeruser;
  }

  return (
    <div className="outer">
      <div className="wrapper" id="divOne">
          <h1>{ueberschrift}</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value); }} />
            <img src={icon_user} alt="User" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
            <img src={icon_password} alt="Password" />
          </div> 
          <div className="remember-forgot">
            <label>
              <input type="checkbox" onClick = {handleToggle}/> Remember me
            </label>
            <a> Forgot password? </a>
          </div>
          <button type="submit" className="btn" onClick={clickevent}>
            {ueberschrift}
          </button>
          <div className="register-link"></div>
          <h1>{LoginStatus}</h1>
      </div>
    </div>
  );
}
export default Login;

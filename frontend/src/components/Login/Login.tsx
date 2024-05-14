import "../Login/Login.css";
import React, { useState } from "react";
import icon_user from "../../img/icon_user.png";
import icon_password from "../../img/icon_password.png";
import Axios from "axios";
import { IoClose } from "react-icons/io5";

function Login(){

  const [LoginStatus, setLoginStatus] = useState ('');
  const [isToggled, setIsToggled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      console.log(response.data.loginmessage); 
      setLoginStatus(response.data.loginmessage)
      let token = response.data.token
      localStorage.setItem('token', token)


    })}
  
  const handleToggle = () => {
    setIsToggled(!isToggled);
    setLoginStatus("");
  };

  let ueberschrift;
  let ueberschrift2;
  let clickevent;
  if (isToggled === false) {
    ueberschrift = "Login";
    ueberschrift2 = "Registrieren"
    clickevent = loginuser;
    
  } else {
    ueberschrift = "Registrieren";
    ueberschrift2= "Login"
    clickevent = registeruser;
  }

  return (
    <div className="outer">
      <div className="wrapper" id="divOne">
          <h1>{ueberschrift}</h1>
          <IoClose size={35}/>
          <div className="input-box">
            <input type="text" placeholder="  Username" onChange={(e) => { setUsername(e.target.value); }} />
            <img src={icon_user} alt="User" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="  Password" onChange={(e) => { setPassword(e.target.value); }} />
            <img src={icon_password} alt="Password" />
          </div> 
          <div className="labels-container">
            <label onClick={handleToggle}>
              {ueberschrift2}
            </label>
            <label> Passwort vergessen? </label>
          </div>
          <button type="submit" className="btn" onClick={clickevent}>
            {ueberschrift}
          </button>
          <div className="register-link"></div>
          {LoginStatus}
      </div>
    </div>
  );
}
export default Login;

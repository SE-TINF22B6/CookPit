import '../Login/Login.css';
import React, { useState } from "react";
import icon_user from '../../img/icon_user.png';
import icon_password from '../../img/icon_password.png';
import Axios from 'axios';


function Login(){
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  
  const register = () => {
    Axios.post("/login", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };
  
 // const message = isToggled === true ? <p>Don't have an account? Register now</p> : <p>ficke</p>;
  
  return (
    <div className="outer">
      <div className="wrapper" id="divOne">
        
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" onChange={(e) => { setUsernameReg(e.target.value); }} />
            <img src={icon_user} alt="User" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" onChange={(e) => { setPasswordReg(e.target.value); }} />
            <img src={icon_password} alt="Password" />
          </div>
  
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href=""> Forgot password? </a>
          </div>
          <button type="submit" className="btn" onClick={register}>
            Login
          </button>
          <div className="register-link"></div>
      </div>
    </div>
  );
  };
  export default Login;
  
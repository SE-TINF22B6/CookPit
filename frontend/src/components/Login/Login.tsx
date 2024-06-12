import "../Login/Login.css";
import React, { useEffect, useState } from "react";
import icon_user from "../../img/icon_user.png";
import icon_password from "../../img/icon_password.png";
import Axios from "axios";
import { IoClose } from "react-icons/io5";

interface LoginProps {
  onToggleLogin?: () => void;
  onData: (data: string) => void;	
}

const Login: React.FC<LoginProps> = ({ onToggleLogin, onData }) => {
  const [childData, setChildData] = useState('');

  const [LoginStatus, setLoginStatus] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registeruser = () => {
    Axios.post("http://localhost:3001/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data.loginmessage);
      setLoginStatus(response.data.loginmessage);
    });
  };

  const loginuser = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.success) {
        setChildData(username);
        onData(username);
        console.log(response.data.loginmessage); 
        setLoginStatus(response.data.loginmessage);
        localStorage.setItem('token', response.data.token);
        if (onToggleLogin) {
          onToggleLogin();
        }
      } else {
        setLoginStatus("Benutzername existiert nicht oder Passwort ist falsch. Bitte versuchen Sie es erneut.");
      };
    });
  };

  useEffect(() => {
    console.log(childData); // This will log whenever childData changes
  }, [childData]);
  
  const handleToggle = () => {
    setIsToggled(!isToggled);
    setLoginStatus("");
  };

  let ueberschrift;
  let ueberschrift2;
  let clickevent;
  if (isToggled === false) {
    ueberschrift = "Login";
    ueberschrift2 = "Registrieren";
    clickevent = loginuser;
  } else {
    ueberschrift = "Registrieren";
    ueberschrift2 = "Login";
    clickevent = registeruser;
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      clickevent();
    }
  };
  return (
    <div className="outer">
      <div className="wrapper" id="divOne">
        <h1>
          {ueberschrift}
          <IoClose size={35} className="btnclose" onClick={onToggleLogin} />
        </h1>
        <div className="input-box">
          <input type="text" placeholder="  Username" onChange={(e) => setUsername(e.target.value)} />
          <img src={icon_user} alt="User" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="  Password" onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown}/>
          <img src={icon_password} alt="Password" />
        </div>
        <div className="labels-container">
          <label onClick={handleToggle}>
            {ueberschrift2}
          </label>
        </div>
        <button type="submit" className="btn" onClick={clickevent}>
          {ueberschrift}
        </button>
        <div className="loginmsg">
          {LoginStatus}
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import '../Login/Login.css';
import icon_user from '../../img/icon_user.png';
import icon_password from '../../img/icon_password.png';

const Login: React.FC = () => {
  return (
    <div className="outer">
      <div className="wrapper" id="divOne">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <img src={icon_user} alt="User" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <img src={icon_password} alt="Password" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#"> Forgot password? </a>
          </div>

          <button type="submit" className="btn">
            {' '}
            Login{' '}
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

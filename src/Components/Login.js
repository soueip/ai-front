import React, { useState } from 'react';
import './css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../JS/userSlice/userSlice';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector(state => state.user.status);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(userLogin(login));
  };

  // Redirect user after successful login
  if (userStatus === 'fulfilled') {
    navigate("/UserInterface");
  }

  return (
    <div className="containerlogin">
      <h1 className="welcomelogin">Welcome</h1>
      <form className="formlogin" onSubmit={handleSubmit}>
        <label className={"labellogin"}>
          <p className='labelltext'>Enter your login</p>
          <input
            className={"inputlogin"}
            type="text"
            required
            name="email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <p className='labelltext'>Enter your Password</p>
          <input
            className={"inputlogin"}
            type="password"
            required
            name="password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </label>
        <button type="submit" className={"buttonlogin"}>
          <p className='buttontext'>Continue</p>
        </button>
        <div className='logintext'>
          Don't have an account? <Link className={"linklogin"} to="/Register">Sign up now</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

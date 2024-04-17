import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import {userRegister} from '../JS/userSlice/userSlice'
import './css/register.css'; 

const Register = () => {
  const [register, setregister] = useState({
    name: '',
    email: '',
    password: '',
    lastName:'',
    companywebsite:'',
    phone:'',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(userRegister(register)); // Dispatch userRegister action
  };


  return (
    <div className="containerregister">
      <div className="leftregister">
      <Link to="/" className="top-left-link">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 11" width="6" style={{ paddingRight: '10px' }}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 1.5-4 4 4 4"></path>
  </svg>
  Back to website
</Link>
        <div className="quote-wrapperregister">
          <div className="inner-contentregister">
            <div>
              <div className="quoteregister">Create your</div>
              <div className="quoteregister">DISPL® platform</div>
              <div className="descriptionregister">
                <div className="descriptionregisterlabel" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="20">
                    <circle cx="14.5" cy="3.5" r="1.5"></circle>
                    <circle cx="5.5" cy="2.5" r="1.5"></circle>
                    <path fill="#fff" stroke="#fff" strokeWidth="2" d="M4.074 6h2.852l-.357 5H4.43z"></path>
                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10v8M6.5 11l.5 7M13 13l-1 5M16 13v5M4 6 2 8l2 2M7 6l2 3M15.571 7H13.43L12 12h5z"></path>
                  </svg>
                  Get Visitors Insights
                </div>
                <div className="descriptionregisterlabel">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="20">
                    <path stroke="#fff" strokeLinejoin="round" strokeWidth="2" d="m19 1-.802 4.279a9.7 9.7 0 0 1-5.03 6.803l-1.188.623a2.575 2.575 0 0 1-3.017-.46l-1.209-1.208a2.575 2.575 0 0 1-.46-3.017l.624-1.189a9.7 9.7 0 0 1 6.803-5.029z"></path>
                    <path fill="#fff" d="M12.634 9.134a1.25 1.25 0 1 1-1.768-1.768 1.25 1.25 0 0 1 1.768 1.768"></path>
                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.406 13.539 11 17l2.088-1.98c.834-.79 1.125-1.96.752-3.02M6.462 8.594 3 9l1.98-2.088C5.77 6.078 6.94 5.787 8 6.16"></path>
                    <path stroke="#fff" strokeLinejoin="round" strokeWidth="2" d="M6.85 11.3a1.85 1.85 0 0 1 0 3.7H5v-1.85a1.85 1.85 0 0 1 1.85-1.85Z"></path>
                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15-1.5 1.5M1.5 18.5 1 19"></path>
                  </svg>
                  Launch Digital Signage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightregister">
        <h2>Create account</h2>
          <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setregister({...register, email:e.target.value})}
            required
          />
          <input
            type="companywebsite"
            name="companyWebsite"
            placeholder="Company Website"
            onChange={(e) => setregister({...register, companywebsite:e.target.value})}
            required
          />
          
 <input
  type="number"
  name="phoneNumber"
  placeholder="Phone Number"
  onChange={(e) => setregister({...register, phone:e.target.value})}
  required
/>
 <input
  type="name"
  name="name"
  placeholder="please enter your name"
  onChange={(e) => setregister({...register, name:e.target.value})}
  required
/>
 <input
  type="lastname"
  name="lastName"
  placeholder="please enter your last name"
  onChange={(e) => setregister({...register, lastName:e.target.value})}
  required
/>
 <input
  type="password"
  name="password"
  className='pssword'
  placeholder="pealse enter your password"
  onChange={(e) => setregister({...register, password:e.target.value})}
  required
/>

          <button className='get-started-btn' onClick={()=> {dispatch(userRegister(register))}} >Create</button>
        </form>
        <div >
        Already have an account?
 <Link className={"linkregister"} to= "/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

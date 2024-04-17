import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getuser, userCurrent } from './JS/userSlice/userSlice';
import UserInterface from './Components/UserInterface';
import PrivateRoute from './routes/PrivateRoute';
import Usernavbar from './Components/Navbar/Usernavbar';
import Campaigns from './Components/User/Campaigns';
import Content from './Components/User/Content';
import Dashboard from './Components/User/Dashboard';
import Insights from './Components/User/Insights';
import Schedule from './Components/User/Schedule';
import Templates from './Components/User/Templates';

function App() {
  const isAuth = localStorage.getItem("token");
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register', '/userinterface','/templates','/schedule','/insights','/dashboard','/content','/campaigns'];
  const hideSieNavbarRoutes = ['/', '/login', '/register'];
  
  const currentPath = window.location.pathname.toLowerCase(); // Accessing window.location
  const shouldShowNavbar = !hideNavbarRoutes.includes(currentPath);
  const shouldShowSieNavbar = !hideSieNavbarRoutes.includes(currentPath);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
      dispatch(getuser());
    }
  }, []);
  return (
    <div className="App">
      {shouldShowNavbar && <Navbar />}
      {shouldShowSieNavbar && <Usernavbar />}

      <div className="header">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Campaigns' element={<PrivateRoute  Component={Campaigns} />} />
          <Route path='/Content' element={<PrivateRoute  Component={Content} />} />
          <Route path='/Dashboard' element={<PrivateRoute  Component={Dashboard} />} />
          <Route path='/Insights' element={<PrivateRoute  Component={Insights} />} />
          <Route path='/Schedule' element={<PrivateRoute  Component={Schedule} />} />
          <Route path='/Templates' element={<PrivateRoute  Component={Templates} />} />
        
          <Route path="/UserInterface" element={<PrivateRoute  Component={UserInterface} />} />
          <Route/> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
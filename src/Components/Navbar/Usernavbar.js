import React from 'react';
import './Usernavbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../JS/userSlice/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const Usernavbar = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <div className="sidebar">
            <ul>
            
                <li>
                <Link to="/Dashboard" className="login-btn">
                <img src="https://storage.displayforce.ai/platform/default/logo.png" alt="logo" />

                        <div className="linkName_dSD">Dashboard</div>
                    </Link>
                </li>
                <li>
                <Link to="/Campaigns" className="login-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 16 17" style={{ fill: "currentcolor" }}>
                            <path fill="currentColor" fillRule="evenodd" d="M4.923 14.796l8.123-4.617a1.924 1.924 0 000-3.358L4.923 2.204C3.61 1.458 1.97 2.391 1.97 3.883v9.234c0 1.492 1.641 2.425 2.954 1.679zm9.108-2.938c2.625-1.493 2.625-5.223 0-6.716L5.908.525C3.282-.967 0 .898 0 3.883v9.234c0 2.985 3.282 4.85 5.908 3.358l8.123-4.617z" clipRule="evenodd"></path>
                        </svg>
                        <div className="linkName_dSD">Campaigns</div>
                    </Link>
                </li>
                <li> <Link to="/Schedule" className="login-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 18 14" style={{ fill: "currentcolor" }}>
                            <rect width="17" height="1" x="0.5" y="6.5" fill="currentColor" stroke="currentColor" rx="0.5"></rect>
                            <rect width="7" height="1" x="10.5" y="0.5" fill="currentColor" stroke="currentColor" rx="0.5"></rect>
                            <rect width="7" height="1" x="0.5" y="12.5" fill="currentColor" stroke="currentColor" rx="0.5"></rect>
                        </svg>
                        <div className="linkName_dSD">Schedule</div>
                    </Link>
                </li>
                <li>
                <Link to="/Content" className="login-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 17 18" style={{ fill: "currentcolor" }}>
                            <path fill="currentColor" fillRule="evenodd" d="M17 14a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h7l6 6v8zm-4 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5v4a2 2 0 002 2h4v6a2 2 0 01-2 2z" clipRule="evenodd"></path>
                        </svg>
                        <div class="linkName_dSD">Content</div>
                    </Link>
                </li>
                <li>
                <Link to="/Templates" className="login-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 17 18" style={{ fill: "currentcolor" }}>
                            <path fill="currentColor" d="M4.413 2.057A3.02 3.02 0 015 2h1.875V0H5a5.02 5.02 0 00-.975.095l-.98.194.387 1.962.981-.194zM12 0h-1.875v2H12c.202 0 .398.02.587.057l.98.194.389-1.962-.981-.194A5.02 5.02 0 0012 0zM2.057 4.413l.194-.98L.29 3.043l-.194.981A5.02 5.02 0 000 5v2h2V5c0-.202.02-.398.057-.587zM16.905 4.025l-.194-.98-1.962.387.194.981c.037.19.057.385.057.587v2h2V5c0-.333-.033-.659-.095-.975zM2 13v-2H0v2c0 .333.033.659.095.975l.194.98 1.962-.387-.194-.981A3.02 3.02 0 012 13zM17 13v-2h-2v2c0 .202-.02.398-.057.587l-.194.98 1.962.389.194-.981c.062-.316.095-.642.095-.975zM4.413 15.943l-.98-.194-.389 1.962.981.194c.316.062.642.095.975.095h1.875v-2H5c-.202 0-.398-.02-.587-.057zM12.975 17.905l.98-.194-.387-1.962-.981.194A3.026 3.026 0 0112 16h-1.875v2H12c.333 0 .659-.033.975-.095zM10.42 8.325l2.332-2.666-1.505-1.318-2.333 2.667 1.505 1.317zM5.752 13.659l2.334-2.667L6.58 9.675 4.247 12.34l1.505 1.318z"></path>
                        </svg>
                        <div className="linkName_dSD">Templates</div>
                    </Link>
                </li>
                <li>
                <Link to="/Insights" className="login-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="19" height="19" style={{ fill: "none" }}>
                            <path d="M13.5 1.20577C11.7842 0.215168 9.78952 -0.181602 7.82526 0.0769958C5.86101 0.335596 4.03696 1.23511 2.63604 2.63604C1.23511 4.03696 0.335596 5.861 0.0769964 7.82526C-0.181603 9.78952 0.215167 11.7842 1.20577 13.5C2.19637 15.2158 3.72545 16.5567 5.55585 17.3149C7.38624 18.0731 9.41567 18.2061 11.3294 17.6933C13.2431 17.1806 14.9341 16.0507 16.1402 14.4789C17.3463 12.9071 18 10.9812 18 9L9 9L13.5 1.20577Z" fill="currentColor"></path>
                            <circle cx="8" cy="8" r="8" transform="matrix(1 0 0 -1 1 17)" stroke="currentColor" strokeWidth="2"></circle>
                        </svg>
                        <div className="linkName_dSD">Insights &amp; data</div>
                    </Link>
                </li>
            </ul>   
            {user && (
                <a className="anav" href="/" style={{ fontSize: "26px" }} onClick={(e) => { e.preventDefault(); dispatch(logout()); navigate("/"); }}>
                    Logout
                </a>
            )}
        </div>
    );
};

export default Usernavbar;

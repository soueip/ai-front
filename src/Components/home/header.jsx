import React from "react";
import "./css/header.css";
export const Header = (props) => {
  return (
    <header id="header" className="container">
      <div className="headercontent">
      <h1 className="headertitle">
        {props.data ? props.data.title : "Loading"}
        <span></span>
      </h1>
      <video className="headervideo" src={props.data ? props.data.largeVideo : ""} autoPlay muted loop>
        Your browser does not support the video tag.
      </video>
      <div className="buttons">
      <a href="https://signup.displayforce.ai/" className="get-started-btn">Get an expert consultation</a>
      <a href="https://id.displayforce.ai/#/login" className="trynow-btn">Try now 
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none"  xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L5 5.5L1 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
      </div>
      <div>
        <ul role="list" class="hero-grey__points w-list-unstyled">
    <li class="hero-grey__point">
        <div class="hero-grey__point-icon">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8835 7.06398L19 4.5L15.4773 3.71717C14.8274 3.57275 14.1935 3.3638 13.5852 3.09341L10 1.5L6.41482 3.09341C5.80646 3.3638 5.17262 3.57275 4.52274 3.71717L1 4.5L1.11654 7.06398C1.35239 12.2526 4.44137 16.8842 9.14095 19.0957L10 19.5L10.8591 19.0957C15.5586 16.8842 18.6476 12.2526 18.8835 7.06398Z" stroke="#7F7F7F" stroke-width="2" stroke-linejoin="round"></path>
                <path d="M7 10L9 12L13 8" stroke="#7F7F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <div>GDPR & CCPA compliant</div>
    </li>
    <li class="hero-grey__point">
        <div class="hero-grey__point-icon">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.15914 1.43748C9.56404 0.854172 10.436 0.854174 10.8409 1.43748L13.3902 5.11C13.5227 5.30095 13.7179 5.44095 13.9428 5.50641L18.2683 6.76529C18.9553 6.96524 19.2247 7.78395 18.7879 8.3444L16.038 11.873C15.8951 12.0565 15.8205 12.283 15.8269 12.5144L15.9509 16.965C15.9706 17.6719 15.2652 18.1778 14.5904 17.9409L10.3415 16.4492C10.1206 16.3716 9.87938 16.3716 9.65846 16.4492L5.40962 17.9409C4.73478 18.1778 4.02938 17.6719 4.04907 16.965L4.17305 12.5144C4.1795 12.283 4.10495 12.0565 3.96197 11.873L1.21206 8.3444C0.775293 7.78395 1.04473 6.96524 1.73175 6.76529L6.0572 5.50641C6.28211 5.44095 6.47728 5.30095 6.60983 5.11L9.15914 1.43748Z" stroke="#7F7F7F" stroke-width="2"></path>
            </svg>
        </div>
        <div>Top-ranked by NIST</div>
    </li>
</ul>
</div>
      </div>
    </header>
  );
};

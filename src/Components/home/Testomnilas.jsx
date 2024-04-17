
import './css/Testomnilas.css';
import React from 'react';
import ReactPlayer from 'react-player';

const Testomnilas = () => {
    return (
        <div className="containerTestomnilas">
            <h1>What customers say about us</h1>

            <div className="containerpictureTestomnilas">
                <div className="left-pictureTestomnilas">
                    <ReactPlayer className="right-pictureTestomnilasvid"
                        url="https://www.youtube.com/watch?v=alB5c6wCLf4"
                      
                    />
                </div>
                
                <div className="right-pictureTestomnilas">
                    <ReactPlayer className="right-pictureTestomnilasvid"
                        url="https://www.youtube.com/watch?v=hd2UOiAKU1k"
                        
                    />
                </div>

            </div>
            <div className="buttons">
      <a href="https://signup.displayforce.ai/" className="get-started-btn">Get an expert consultation</a>
      <a href="https://id.displayforce.ai/#/login" className="trynow-btn">Try now 
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none"  xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L5 5.5L1 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
      </div>
        </div>
    );
};

export default Testomnilas;

import React from 'react';
import './css/cms.css'; // Import your CSS file

const CmsComponent = () => {
  return (
    <div id="cms" className="cms-container grid-layout features-section">
      <div className="column-left">
        <img
          src="https://assets-global.website-files.com/6270f157923cfedd922e9299/64427afd8ea7e7525e86336f_photo_2023-04-21_14-58-10.jpg"
          alt=""
          className="main-image"
        />
      </div>
      <div className="column-right">
        <div className="content-wrapper">
          <h1 className="main-title">AI Media Player for Easy Start</h1>
          <div className="price-badge-container">
  <div className="price-badge">
    <span className="price-text">$54</span> monthly *
  </div>
</div>

          <div className="services-list">
            <div className="service-item">
              <img src="https://assets-global.website-files.com/6270f157923cfedd922e9299/6405fa8b182f4ebdf278c5c4_ai.svg" loading="lazy" alt="" className="service-icon" />
              <div className="service-text">AI-powered analytics</div>
            </div>
            <div className="service-item">
              <img src="https://assets-global.website-files.com/6270f157923cfedd922e9299/6405fa83966cdf76b663bc13_license.svg" loading="lazy" alt="" className="service-icon" />
              <div className="service-text">Software</div>
            </div>
            <div className="service-item">
              <img src="https://assets-global.website-files.com/6270f157923cfedd922e9299/6385db2c87d860232cfea652_sensor.svg" loading="lazy" alt="" className="service-icon" />
              <div className="service-text">Hardware</div>
            </div>
          </div>
          <p className="description-text">
            Place the DISPL Fast Start Kit in your store (exit zone/checkout zone/etc.) <br />and start seeing real data about your visitors immediately!
          </p>
          <div className="buttons-wrapper">
            <a href="/kit#get-kit" className="primary-button">Order now</a>
            <a href="/contacts" className="secondary-button">Contact us</a>
          </div>
          <div className="bottom-text">
            * Let us know if you have your own equipment. <br />All you need is a SaaS. Price with an annual subscription.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsComponent;

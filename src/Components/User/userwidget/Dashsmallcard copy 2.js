import React from 'react'
import '../css/widget/Dashsmallcard.css'
const Dashsmallcard = ({ total, connected, notConnected,online }) => {
  return (
   
      <div className="device-info-containerbig ">
      <div className="device-info-content">
        <div className='picturediv'> 
        <img src="../img/user/devices.png " alt="connected" className="device-info-img" />
        </div>
        <div className='device-info-text'>
        <h3>Devices Total: {total}</h3>
        <p className='device-info-p'>Connected: {connected}</p>
        <p className='device-info-p'>Not connected: {notConnected}</p>
        <p className='device-info-p'>Online: {online}</p>
        </div>
      </div>
      <a href="/n/#/devs" target="_self">
        <button className="manage-button ">Manage</button>
      </a>
      </div>
   
  )
}

export default Dashsmallcard
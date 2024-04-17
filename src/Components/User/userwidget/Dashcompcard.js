import React from 'react'
import '../css/widget/Dashcompcard.css'
import { useNavigate } from 'react-router-dom';

const Dashcompcard = ({ activeCampaigns, totalCampaigns, plannedCampaigns }) => {
    const navigate = useNavigate();
  return (
    <div className="campaignSchedule_container">
    <p className="activeCampaigns_count">{activeCampaigns}</p>
    <h2 className="activeCampaigns_title">Active campaigns</h2>

    <p className="totalCampaigns_title">Total: {totalCampaigns}</p>

    <p className="plannedCampaigns_title">Campaigns planned: {plannedCampaigns}</p>
    <div className="btns_container">
      <button className="campaigns_btn hoverable_oUa variant-outline_AxF color-white_dJ5" onClick={() => navigate("/Campaigns")}>
        Campaigns
      </button>
      <button className="schedule_btn hoverable_oUa variant-outline_AxF color-white_dJ5" onClick={() => navigate("/Schedule")}>
        Schedule
      </button>
    </div>
  </div>
  
  )
}

export default Dashcompcard
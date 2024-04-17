import React from 'react'
import '../css/widget/Dashcompcard.css'
import { useNavigate } from 'react-router-dom';

const Dashshowcard = ({ shows  }) => {
    const navigate = useNavigate();
  return (
    <div className="campaignSchedule_container">
    <p className="activeCampaigns_count">{shows}</p>
    <h2 className="activeCampaigns_title">Shows in 24 hours</h2>
   
    <div className="btns_container">
      <button className="campaigns_btn hoverable_oUa variant-outline_AxF color-white_dJ5" onClick={() => navigate("/Insights")}>
        Details
      </button>

    </div>
  </div>
  
  )
}

export default Dashshowcard
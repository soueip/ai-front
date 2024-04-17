import React from 'react';
import Dashcompcard from './userwidget/Dashcompcard';
import Dashshowcard from './userwidget/Dashshowcard';
import './css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className="dashboardItem">
        <Dashcompcard activeCampaigns={0} totalCampaigns={0} plannedCampaigns={0} />
      </div>
      <div className="dashboardItem">
        <Dashshowcard shows={0} />
      </div>
    </div>
  );
};

export default Dashboard;

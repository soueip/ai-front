import React from 'react';
import Dashcompcard from './userwidget/Dashcompcard';
import Dashshowcard from './userwidget/Dashshowcard';
import './css/Dashboard.css';
import Dashsmallcard from './userwidget/Dashsmallcard';
import Dashsmallcard2 from './userwidget/Dashsmallcard2';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className="dashboardItem">
        <Dashcompcard activeCampaigns={0} totalCampaigns={0} plannedCampaigns={0} />
      </div>
      <div className="dashboardItem">
        <Dashshowcard shows={0} />
      </div>
      <div className="dashboardItem">
        <Dashsmallcard total={0} connected={0} notConnected={0} online={0} />
        <Dashsmallcard total={0} connected={0} notConnected={0} online={0} />
      </div>
      <div className="dashboardithems">
        <Dashsmallcard2 total={0} connected={0} notConnected={0} online={0} />
        <Dashsmallcard2 total={0} connected={0} notConnected={0} online={0} />
      </div>

    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import JsonData from "../data/data.json";
import { Header } from './home/header';
import { Industries } from './home/industries';
import AnalysEngament from './home/analyzengage';
import Digitalscreens from './home/digitalscreens';
import CmsComponent from './home/cms';
import Worksin from './home/worksin';
import Testomnilas from './home/Testomnilas';
const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      <Industries data={landingPageData.industries} />
      <AnalysEngament  data={landingPageData.AnalysEngament}/>
      <Digitalscreens  data={landingPageData.digitalscreens}/>
      <CmsComponent data={landingPageData.CmsComponent}/>
      <Worksin />
      <Testomnilas/>

    </div>
  )
}

export default Home
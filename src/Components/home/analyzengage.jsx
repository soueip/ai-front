import React from 'react';
import './css/analyseEngagment.css'; 

const AnalysEngament = (props) => {
  const { data } = props;

  return (
    <div>

    <div className="containeranalyse">
    <h1>Analyze and engage customers</h1>
      <div className="containerpictureanalyse">
        <div>
          {data && data.length > 0 && (
            <a href={data[0].link} className="picture-containeranalyse">
              <img className="left-pictureanalyse" src={data[0].pic} alt={data[0].title} />
              <div className="text-containeranalyse">
                <div className="picture-textanalyse">
                  <span dangerouslySetInnerHTML={{ __html: data[0].icon }} />
                  {data[0].title}
                </div>
              </div>
            </a>
          )}
        </div>
        <div className="right-picturesanalyse">
          {data && data.length > 1 && data.slice(1, 3).map((d, i) => (
            <div key={`${d.title}-${i}`} className="right-pictureanalyse">
              <a href={d.link} className="picture-containeranalyse">
                <img src={d.pic} alt={d.title} />
                <div className="text-containeranalyse">
                  <div className="picture-textanalyse">
                    <span dangerouslySetInnerHTML={{ __html: d.icon }} />
                    <span style={{ fontSize: '14px', fontWeight: 'bold'}}>{d.title}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnalysEngament;

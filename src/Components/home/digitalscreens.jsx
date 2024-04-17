import React from 'react';
import './css/digitalscreens.css'; 

const Digitalscreens = (props) => {
  const { data } = props;

  return (
    <div className="containerDigital">
      <h1>Monetize digital screens</h1>
      <div className="containerpictureDigital">
        <div className="left-pictureDigital" >
          {data && data.length > 0 && (
            <a href={data[0].link} className="picture-containerDigital">
              <img  src={data[0].pic} alt="Left" />
              <div className="text-containerDigital">
                <div className="picture-textDigital">
                  <span dangerouslySetInnerHTML={{ __html: data[0].icon }} />
                  <span style={{ fontSize: '14px', fontWeight: 'bold'}}>{data[0].title}</span>
                </div>
              </div>
            </a>
          )}
        </div>
        <div className="right-picturesDigital">
          {data && data.length > 1 && data.slice(1, 3).map((d, i) => (
            <div key={`${d.title}-${i}`} className="right-pictureDigital" >
              <a href={d.link} className="picture-containerDigital">
                <img src={d.pic} alt={`Right ${i + 1}`} />
                <div className="text-containerDigital">
                  <div className="picture-textDigital">
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
  );
};

export default Digitalscreens;

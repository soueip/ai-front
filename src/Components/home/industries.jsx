  import React from "react";
  import "./css/industries.css";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faNewspaper, faShoppingBag, faLaptop, faUtensils, faHotel, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

  export const Industries = (props) => {
    return (
      <div id="industries">
        <div className="featuretitle">
          <h2>Industries</h2>
        </div>
        <div className="container">
          <div className="rowindustries">
            {props.data && props.data.length > 0 ? (
              props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="titleindustries">
                  <a href={d.link}>
                    <div className="icon-title-container">
                      <div className="icon-container">
                      {d.icon === "fa fa-newspaper" && <FontAwesomeIcon icon={faNewspaper} />}
                        {d.icon === "fa-shopping-bag" && <FontAwesomeIcon icon={faShoppingBag} />}
                        {d.icon === "fa-laptop" && <FontAwesomeIcon icon={faLaptop} />}
                        {d.icon === "fa fa-utensils" && <FontAwesomeIcon icon={faUtensils} />}
                        {d.icon === "fa-hotel" && <FontAwesomeIcon icon={faHotel} />}
                        {d.icon === "fa-shopping-basket" && <FontAwesomeIcon icon={faShoppingBasket} />}
                      </div>
                      <h3>{d.title}</h3>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No industries data available</p>
            )}
          </div>
        </div>
      </div>
    );
  };

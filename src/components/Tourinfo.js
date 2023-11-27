import { toursData } from "../data";

import React from "react";

const Tourinfo = () => {
  return (
    <div className="section-center featured-center">
      {toursData.map((data) => {
        return (
          <article className="tour-card" key={data.id}>
            <div className="tour-img-container">
              <img src={data.img} className="tour-img" alt="" />
              <p className="tour-date">{data.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{data.title}</h4>
              </div>
              <p>{data.text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {data.country}
                </p>
                <p>{data.days}</p>
                <p>{data.money}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tourinfo;

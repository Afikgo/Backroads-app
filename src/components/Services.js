import React from "react";
import { Title } from "./Title";
import { ServiceArticale } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {ServiceArticale.map((art) => {
          return (
            <article className="service" key={art.id}>
              <span className="service-icon">
                <i className={art.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{art.title}</h4>
                <p className="service-text">{art.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

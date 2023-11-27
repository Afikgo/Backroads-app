import React from "react";
import { Title } from "./Title";
import Tourinfo from "./Tourinfo";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="FEATURED" subTitle="tours" />
      <Tourinfo />
    </section>
  );
};

export default Tours;

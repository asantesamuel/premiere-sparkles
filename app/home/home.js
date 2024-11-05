import React from "react";
import Hero from "../components/hero";
import Homecontainerone from "../components/homeContainerone";
import Homecontainertwo from "../components/homeContainertwo";
import HomeContainerthree from "../components/homeContainerthree";
const home = () => {
  return (
    <div>
      <Hero />
      <Homecontainerone />
      <Homecontainertwo />
      <HomeContainerthree />
    </div>
  );
};

export default home;

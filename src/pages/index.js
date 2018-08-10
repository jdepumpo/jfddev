import React from "react";
import Link from "gatsby-link";
import Chilling from "../images/chilling.svg";
import Hero from "../images/hero.svg";

const IndexPage = () => (
  <div>
  <div className="bg-white">
  <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto mb-12">
  <img src={Hero} className="max-w-lg p-2 m-auto my-6"/>
  </div>
  </div>
  <div className="text-center">
    <img src={Chilling} className="block max-w-sm mx-auto w-1/2" />
    <h2 className="bg-purple-lighter inline-block my-8 p-3">
      More is coming soon.
    </h2>
  </div>
  </div>
);

export default IndexPage;

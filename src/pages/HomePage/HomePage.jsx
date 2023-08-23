import React from "react";
import Slogan from "./component/Slogan/Slogan";
import WhoWeAre from "./component/WhoWeAre/WhoWeAre";
import Features from "./component/Features/Features";
import Team from "./component/Team/Team";
import Faq from "./component/Faq/Faq";
import Greentext from "./component/GreenText/GreenText";

function HomePage() {
  return (
    <>
      <Slogan />
      <WhoWeAre />
      <Features />
      <Team />
      <Faq />
      <Greentext />
    </>
  );
}

export default HomePage;

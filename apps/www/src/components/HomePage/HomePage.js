import React from "react";
import LandingSection from "../LandingSection/LandingSection";
import { homeObjOne, homeObjTwo } from "./Data";

function HomePage() {
  return (
    <>
      <LandingSection {...homeObjOne} />
      <LandingSection {...homeObjTwo} />
    </>
  );
}

export default HomePage;

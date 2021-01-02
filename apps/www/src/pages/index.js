import React from "react";
import { withAuth } from "@/hocs";

const Home = () => {
  return <h1>Logged In</h1>;
};

export default withAuth(Home);

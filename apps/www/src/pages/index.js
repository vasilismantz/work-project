import React from "react";
import { withAuth } from "@/hocs";
import { NavbarApp } from "@/components";
import { Content } from "@/components";

const Home = () => {
  return (
    <>
      <NavbarApp />
      <Content />
    </>
  );
};

export default withAuth(Home);

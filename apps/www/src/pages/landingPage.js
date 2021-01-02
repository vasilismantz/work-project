import React from "react";
import { withoutAuth } from "@/hocs";
import { Navbar } from "@/components";
import { HomePage } from "@/components";
import { Footer } from "@/components";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default withoutAuth(Landing);

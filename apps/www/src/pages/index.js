import React from "react";
import { withAuth } from "@/hocs";
import { NavbarApp } from "@/components";
import { Content } from "@/components";
import { ProjectsProvider, SelectedProjectProvider } from "@/context";

const Home = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <NavbarApp />
        <Content />
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default withAuth(Home);

import { useState, useEffect } from "react";
import { useProjects } from "@/hooks";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@work-project/graphql";
import { Delete } from "@material-ui/icons";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (error) console.log(`Error! ${error.message}`);
  if (loading) return "Loading...";

  console.log(data);

  return data.categories.map(project => {
    return (
      <li key={project.id} className="sidebar__project">
        <span className="sidebar__dot">•</span>
        <span className="sidebar__project-name">{project.name}</span>
        {/* Add onClick function */}
        <span className="sidebar__project-delete">
          <Delete />
        </span>
      </li>
    );
  });
};

export default Projects;

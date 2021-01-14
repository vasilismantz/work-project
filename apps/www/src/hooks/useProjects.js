import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@work-project/graphql";

const useProjects = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const { data, loading, error, refetch } = useQuery(GET_CATEGORIES);
    if (loading) return "Loading";
    if (error) return `Error! ${error.message}`;
    setCategories(...data.categories);
    return categories;
  }, []);
};

export default useProjects;

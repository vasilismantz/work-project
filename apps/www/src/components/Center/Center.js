import React from "react";
import { Box } from "@material-ui/core";

const Center = ({ children, ...props }) => (
  <Box
    position="relative"
    display="flex"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    {children}
  </Box>
);

export default Center;

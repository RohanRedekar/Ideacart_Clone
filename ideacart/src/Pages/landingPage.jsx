// import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Card } from "../Components/HomePage/card";
import { Navbar } from "../Components/HomePage/navbar";

export const LandingPage = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Card/>
      </Box>
    </Box>
  );
};

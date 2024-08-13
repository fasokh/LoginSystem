import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import LoginForm from "./LoginForm";

const Home: NextPage = () => {
  return (
    <Box display="flex">
      <Box
        border={"1px solid #edeeee"}
        borderRadius={"xl"}
        p={"1rem"}
        width={{ base: "50%", md: "30%" }}
        m="5rem auto"
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Home;

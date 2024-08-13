import { NextPage } from "next";
import React, { FC } from "react";
import SignUpForm from "./SignUpForm";
import { Box } from "@chakra-ui/react";

const Sign: NextPage = () => {
  return (
    <Box display="flex">
      <Box
        border={"1px solid #edeeee"}
        borderRadius={"xl"}
        p={"1rem"}
        m="1.5rem auto"
      >
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default Sign;

import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { FC, useRef } from "react";
import Header from "./Header";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LoginForm: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const emailInput = useRef<HTMLInputElement>(null); // useRef to access input elements
  const passwordInput = useRef<HTMLInputElement>(null);
  const router = useRouter(); // Fix typo
  const { t } = useTranslation("common"); // Ensure translation keys are set up

  const submitHandler: ButtonProps["onClick"] = (event) => {
    event.preventDefault();

    const emailValue = emailInput.current?.value || "";
    const passwordValue = passwordInput.current?.value || "";

    if (
      emailValue.trim().length === 0 ||
      passwordValue.length < 6 ||
      !emailValue.includes("@")
    ) {
      alert(t("Please enter a correct email and password.")); // Use translation for alert message
      return;
    }

    router.push("/main"); // Navigate to the main page
  };

  return (
    <Box>
      <Header />
      <FormControl mt="1.5rem">
        <FormLabel>{t("email")}</FormLabel>
        <Input
          placeholder={t("email")}
          borderRadius="lg"
          ref={emailInput}
          type="email"
        />
      </FormControl>
      <FormControl mt="1rem">
        <FormLabel>{t("password")}</FormLabel>
        <Input
          placeholder={t("password")}
          borderRadius="lg"
          ref={passwordInput}
          type="password"
        />
      </FormControl>
      <ButtonGroup
        width="100%"
        mt="1.5rem"
        display="flex"
        flexDir="column"
        alignContent="center"
        justifyContent="center"
        gap={4}
      >
        <Button onClick={submitHandler}>{t("submit")}</Button>
        <Button onClick={toggleColorMode}>{t("ColorMode")}</Button>
      </ButtonGroup>
    </Box>
  );
};

export default LoginForm;

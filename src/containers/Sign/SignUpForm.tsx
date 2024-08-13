import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import SignupHeader from "./SignupHeader";
import { FC } from "react";
import { useRouter } from "next/router";
import { useTranslation} from "next-i18next";

const SignUpForm: FC = () => {
  const { toggleColorMode } = useColorMode();
  const rout = useRouter();
  const { t } = useTranslation("common");

  return (
    <Box>
      <SignupHeader />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.name) {
            errors.name = "Name is required";
          }
          if (!values.email) {
            errors.email = t("Email is required");
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "The Email is invalid";
          }
          if (!values.password) {
            errors.password = t("password is required");
          } else if (values.password.length < 6) {
            errors.password = t("The password must be at least 6 characters");
          }
        }}
        onSubmit={(value) => {
          console.log(value);
          rout.push("/main");
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl
              mt={"1.5rem"}
              isInvalid={!!errors.name && touched.name}
            >
              <FormLabel htmlFor="name">{t("name")}</FormLabel>
              <Field as={Input} id="name" name="name" type="name" />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              mt={"1rem"}
              isInvalid={!!errors.email && touched.email}
            >
              <FormLabel htmlFor="email">{t("email")}</FormLabel>
              <Field id="email" type="email" name="email" as={Input} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel mt={"1rem"} htmlFor="password">
                {t("password")}
              </FormLabel>
              <Field id="password" type="password" name="password" as={Input} />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
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
              <Button type="submit">{t("submit")}</Button>
              <Button onClick={toggleColorMode}>{t("ColorMode")}</Button>
            </ButtonGroup>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SignUpForm;

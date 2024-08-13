import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "next-i18next";

const SignupHeader: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Text
        fontSize={{ base: "2.5rem" }}
        fontWeight={{ base: "bolder" }}
        color="#27487d"
      >
        Sign Up
        {t("sign-massge")}
      </Text>
      <Link href="/">
        <Text fontSize="1.5rem" color="#de3e3e" fontWeight={"bold"}>
          {t("sign-warn")}
        </Text>
      </Link>
    </Box>
  );
};

export default SignupHeader;

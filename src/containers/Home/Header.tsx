import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { useTranslation } from "next-i18next";

const Header: FC = () => {
  const { t } = useTranslation("common");
  return (
    <Box>
      <Text
        fontSize={{ base: "2.5rem" }}
        fontWeight={{ base: "bolder" }}
        color="#27487d"
      >
        {t("login-massge")}
      </Text>
      <Link href="/signup">
        <Text fontSize="1.5rem" color="#de3e3e" fontWeight={"bold"}>
          {t("login-warn")}
        </Text>
      </Link>
    </Box>
  );
};

export default Header;

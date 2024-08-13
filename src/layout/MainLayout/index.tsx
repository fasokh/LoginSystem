import { Box, Button, ButtonGroup, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type Props = PropsWithChildren;

const MainLayout: FC<Props> = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const rout = useRouter();
  const { t } = useTranslation("common");

  const exitHandler = () => {
    rout.push("/");
  };

  return (
    <Box bg={"#4267b2"}>
      <Box
        display={"flex"}
        justifyContent={{ base: "space-around" }}
        alignItems={"center"}
      >
        <Link href="">
          <Text
            color="white"
            fontSize={{ base: "2rem" }}
            fontWeight={{ base: "bolder" }}
          >
            {t("logo")}
          </Text>
        </Link>
        <ButtonGroup
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          colorScheme="outline"
          borderRadius="lg"
        >
          <Button onClick={toggleColorMode}>{t("ColorMode")}</Button>
          <Button onClick={exitHandler}>{t("exite")}</Button>
        </ButtonGroup>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default MainLayout;

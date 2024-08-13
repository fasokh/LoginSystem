import { Box } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import MainLayout from "@/layout/MainLayout";
import TableUsers from "@/containers/Mian/TableUsers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

const MainPage: NextPage = () => {
  return (
    <Box>
      <MainLayout />
      <Box padding="2rem">
        <TableUsers />
      </Box>
    </Box>
  );
};

export default MainPage;

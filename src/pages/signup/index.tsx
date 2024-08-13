import Sign from "@/containers/Sign";
import { Box } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

const SignUp: NextPage = () => {
  return (
    <Box>
      <Sign />
    </Box>
  );
};

export default SignUp;

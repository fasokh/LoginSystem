import Home from "@/containers/Home";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}

const index = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default index;

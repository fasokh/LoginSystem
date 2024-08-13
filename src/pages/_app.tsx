import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppChakraProvider from "@/providers/AppChakraProvider";
import { Provider } from "react-redux";
import store from "@/store/app";
import { NextPage } from "next";
import Locale from "@/components/Language";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";

type Props = AppProps;

const App: NextPage<Props> = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const dir = locale === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <AppChakraProvider>
      <Provider store={store}>
        <Locale>
          <Component {...pageProps} />
        </Locale>
      </Provider>
    </AppChakraProvider>
  );
};

export default appWithTranslation(App);

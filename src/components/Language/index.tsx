import { Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const Locale: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { locales, asPath, locale: activeLocale } = router;

  // Determine the position based on the active locale
  const positionStyles =
    activeLocale === "fa"
      ? { left: "0", right: "auto", transform: "translateY(-50%)" }
      : { right: "0", left: "auto", transform: "translateY(-50%)" };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        top="50%" // Center vertically
        mt="0"
        padding="1"
        {...positionStyles} // Apply position styles based on the locale
      >
        {locales &&
          locales.map((locale) => (
            <Link key={locale} href={asPath} locale={locale} passHref>
              <Button
                display="flex"
                flexDirection="column"
                width="4rem"
                padding="2"
                my="0.5rem"
                colorScheme={activeLocale === locale ? "teal" : "gray"}
                variant={activeLocale === locale ? "solid" : "outline"}
              >
                {locale}
              </Button>
            </Link>
          ))}
      </Box>
      {children}
    </>
  );
};

export default Locale;

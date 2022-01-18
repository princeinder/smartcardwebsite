import Head from "next/head";
import React, { useMemo } from "react";
import Layout from "components/common/Layout";
import shape from "lib/theme/shape";
import palette from "lib/theme/palette";
import typography from "lib/theme/typography";
import componentsOverride from "lib/theme/overrides";
import shadows, { customShadows } from "lib/theme/shadows";
import { createTheme, ThemeProvider } from "@mui/material";
import "styles.css";

if (typeof window !== "undefined") {
  require("lazysizes/plugins/attrchange/ls.attrchange.js");
  require("lazysizes/plugins/respimg/ls.respimg.js");
  require("lazysizes");
}

const MyApp = ({ Component, pageProps }) => {

  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;

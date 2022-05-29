import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import History from '../sections/history';
import Tips from '../sections/tips';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="LVC" />
          <Banner />
          <History/>
          <Tips/>
        </Layout>
    </ThemeProvider>
  );
}

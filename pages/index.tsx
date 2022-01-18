import Head from "next/head";
import React from "react";
import Container from '@mui/material/Container';
import FeaturedTitle from "components/home/FeaturedTitle";
import FeaturedVideo from "components/home/FeaturedVideo";


const Home = () => (
  <>
    <Head>
      <title>Home || </title>
      <meta
        name="description"
        content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
      />
    </Head>
      <Container maxWidth="lg"  component="main">
        <FeaturedTitle/>
        <FeaturedVideo/>
      </Container>
  </>
);

export default Home;

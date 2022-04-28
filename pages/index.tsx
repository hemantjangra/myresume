import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ThreeColumnLayout } from "../components/layouts/threecolumnlayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hemant Kumar</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThreeColumnLayout />
    </>
  );
};

export default Home;

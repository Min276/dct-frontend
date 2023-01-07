import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { FunctionComponent, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Skeleton } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Layout = dynamic(import("../components/Layout"), { ssr: false });
const OurServices = dynamic(import("../components/OurServices"), {
  ssr: false,
});
const BannerSection = dynamic(import("../components/BannerSection"), {
  ssr: false,
});
const OurProducts = dynamic(import("../components/OurProducts"), {
  ssr: false,
});
const DCTSection = dynamic(import("../components/DCTSection"), { ssr: false });
const AsxoxShopAppSection = dynamic(
  import("../components/AsxoxShopAppSection"),
  { ssr: false }
);
const SYRealEstateSection = dynamic(
  import("../components/SYRealEstateSection"),
  { ssr: false }
);
const EventLotterySection = dynamic(
  import("../components/EventLotterySection"),
  { ssr: false }
);
const DCTAppSection = dynamic(import("../components/DCTAppSection"), {
  ssr: false,
});

const Home: FunctionComponent = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
    // window.onload = (event) => {
    //   setLoading(!loading);
    // };
    // const loadingStatus = () => setLoading(!loading);
    // setTimeout(() => loadingStatus, 3000)
    // setTimeout(loadingStatus, 3000);
  // });
  return (
    <>
      <Head>
        <title>DCT Company</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      {/* {loading ? (
        <>
          <Skeleton variant="rectangular" width="100%" height={50} />

          <br />
          <Skeleton variant="rectangular" width="100%" height={400} />
          <br />
          <Skeleton variant="text" width="20%" height={50} />
          <br />
          <Skeleton variant="rectangular" width="250" height={250} />
        </>
      ) : ( */}
        <Layout>
          <BannerSection />
          <OurServices />
          <OurProducts />
          <DCTSection />
          <AsxoxShopAppSection />
          <SYRealEstateSection />
          <EventLotterySection />
          <DCTAppSection />
        </Layout>
      {/* )} */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
    },
  };
};

export default Home;
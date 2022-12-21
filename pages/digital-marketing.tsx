import type { GetStaticProps, NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import DMBannerSection from "../components/DigitalMarketingBanner";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FacebookPackages from "../components/FacebookPackages";

const DigitalMarketing:FunctionComponent = () => {
    return(
      <Layout>
        <DMBannerSection />
        <FacebookPackages />
      </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
    },
  };
};

export default DigitalMarketing;
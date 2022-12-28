import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { PageLikeViewCardData } from "../../data/testData";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "./card.module.css";

const CardComponent = dynamic(import("./CardComponent"), { ssr: false });
const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });

const PageLikeViewCard: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 py-16 md:px-24 md:pt-14 md:pb-20 bg-[#0C2E5C]">
      <AnimationFrame>
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-white text-center py-8">
          {t("landing:digitalMarketing.facebookPageLike.title")}
        </Typography>
      </AnimationFrame>
      <Box className="flex justify-center items-center">
        <Box className="hidden xl:flex h-[710px] justify-end items-center">
          <Image
            width={550}
            height={650}
            src="/assets/digitalMarketing/pageLikeVector.svg"
            alt="page like vector"
            className={styles.page_like_image}
          />
        </Box>
        <Box className="flex flex-wrap justify-center items-center gap-y-8 md:gap-x-8 xl:gap-x-0 mt-2 2xl:justify-start 2xl:pl-12 3xl:pl-0">
          {PageLikeViewCardData.map((data: any, index: number) => (
            <CardComponent
              key={index}
              title={data.pricing}
              tab={data.plan}
              pageLike={data.pageLikeRange}
              duration={data.duration}
              report={data.report}
              target={data.target}
              textColor={data.textColor}
              backgroundColor={data.backgroundColor}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PageLikeViewCard;
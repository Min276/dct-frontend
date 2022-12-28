import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { PageLikeViewCardData } from "../../data/testData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import styles from "./card.module.css";

const CardComponent = dynamic(import("./CardComponent"), { ssr: false });

const PageLikeViewCard: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 py-16 md:px-24 md:pt-14 md:pb-20 bg-[#0C2E5C]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-white text-center py-8">
          {t("landing:digitalMarketing.facebookPageLike.title")}
        </Typography>
      </motion.div>
      <Box className="flex justify-end items-center">
        <Box className="hidden xl:flex justiy-end items-center xl:grow-0 xl:shrink-0 xl:basis-auto">
          <Image
            width={500}
            height={500}
            src="/assets/digitalMarketing/pageLikeVector.svg"
            alt="page like vector"
            className="w-full h-[42rem]"
          />
        </Box>
        <Box className="flex flex-wrap justify-center items-center gap-y-8 mt-2 xl:w-[66.666%] xl:grow-0 xl:shrink-0 xl:basis-auto xl:justify-start xl:pl-12">
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
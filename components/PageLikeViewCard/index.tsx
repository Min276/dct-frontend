import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { PageLikeViewCardData } from "../../data/testData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const CardComponent = dynamic(import("./CardComponent"), { ssr: false });

const PageLikeViewCard: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 py-10 md:px-24 md:pt-14 md:pb-20 bg-[#0C2E5C]">
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
      <Box className="flex justify-center items-center">
      <Box className="hidden xl:flex xl:w-1/3 h-[710px]">
      <Image
              width={400}
              height={300}
              src="/assets/digitalMarketing/pageLikeVector.svg"
              alt="page like vector"
           
            />
      </Box>
      <Box className="xl:w-2/3 flex flex-wrap justify-center items-center gap-y-8 mt-2">
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
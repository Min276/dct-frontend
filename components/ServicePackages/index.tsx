import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { ServicePackagesData } from "../../data/testData";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const CardComponent = dynamic(import("./CardComponent"), { ssr: false });

const ServicePackages: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 py-16 md:px-24 md:pt-14 md:pb-20 bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8">
          {t("landing:softwareDevelopment.servicePackages.title")}
        </Typography>
      </motion.div>
      <Box className="flex flex-wrap justify-center items-center gap-y-8 mt-2">
        {ServicePackagesData.map((data: any, index: number) => (
          <CardComponent
            key={index}
            title={data.pricing}
            tab={data.plan}
            textColor={data.textColor}
            backgroundColor={data.backgroundColor}
            restData={data.restData}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ServicePackages;
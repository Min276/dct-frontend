import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { productsData } from "../../data/testData";
import { motion } from "framer-motion";

const ProductComponent = dynamic(import("./ProductComponent"), { ssr: false });

const OurProducts: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 pt-10 pb-14 md:px-24 md:pt-12 md:pb-24 bg-[#0C2E5C]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-white text-center py-8 pb-12">
          {t("landing:ourProductsTitle")}
        </Typography>
      </motion.div>
      <Box className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-8 ">
        {productsData.map((data, index: number) => (
          <ProductComponent
            key={index}
            title={data.title}
            icon={data.icon}
            textColor={data.textColor}
            backgroundColor={data.backgroundColor}
            iconWidth={data.iconWidth}
            iconHeight={data.iconHeight}
            directory={data.directory}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OurProducts;
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const DMBannerSection: FunctionComponent= () => {
  const {t} = useTranslation();
  return (
    <Box className="flex justify-center items-center w-full h-[43vh] sm:h-[54vh] md:h-[60vh] bg-no-repeat bg-center bg-cover bg-blend-multiply bg-[url('/assets/banner.svg')]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4 , duration: 0.5 } }}
      >
        <Typography className="px-8 text-center text-white !text-2xl md:!text-4xl !font-semibold !leading-10">
        {t("landing:title")}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default DMBannerSection;
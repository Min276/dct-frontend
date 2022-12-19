import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SearchFeature = dynamic(import("../SearchFeature"), { ssr: false });

const BannerSection: FunctionComponent = () => {
  return (
    <Box className="relative flex justify-center items-center w-full h-[60vh] bg-no-repeat bg-fixed bg-center bg-cover bg-blend-multiply bg-[url('/assets/banner.svg')]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4 , duration: 0.5 } }}
      >
        <Typography className="px-8 text-center text-white !text-2xl md:!text-4xl !font-semibold !leading-10">
          Welcome to Digital Cloud Technology
        </Typography>
      </motion.div>
      <SearchFeature />
    </Box>
  );
};

export default BannerSection;
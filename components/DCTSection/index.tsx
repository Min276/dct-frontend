import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const DCTSection: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 pt-10 pb-18 md:px-24 md:pt-14 md:py-20 bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-[1.35rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 md:pb-12">
          {t("landing:dctSection.title")}
        </Typography>
      </motion.div>
      <Box className="flex flex-col md:flex-row items-center">
        <Box className="w-full md:w-1/2">
          <Typography className="!text-lg md:!text-xl !font-semibold text-[#0C2E5C]">
            {t("landing:dctSection.subTitle")}
          </Typography>
          <Typography className="text-[#0C2E5C] !font-medium py-4 !leading-7">
            {t("landing:dctSection.description")} 
          </Typography>
          <Box>
            <Box className="flex items-center">
              <FaMapMarkerAlt className="text-[#EF5353] !text-xl" />
              <Typography className="pl-2 text-[#0C2E5C] !font-semibold">
                {t("landing:dctSection.location")}
              </Typography>
            </Box>
            <Typography className="pt-2 pb-8 text-[#1E1D1D] pl-7">
              Time City, Office Tower -3, (16) Floor, No-1602 ,
              <br className="hidden md:block" /> Kamayut Township, Yangon,
              Myanmar.
            </Typography>
          </Box>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <Link
              target="_blank"
              className="px-5 py-3 w-fit rounded-md text-white bg-[#0C2E5C] cursor-pointer !font-semibold"
              href="https://goo.gl/maps/WxThXFRDcAw1rKqBA"
            >
              {t("landing:dctSection.button")}
            </Link>
          </motion.div>
        </Box>
        <Box className="w-full md:w-1/2 flex justify-center md:justify-end py-12 md:py-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <Image
              width={500}
              height={500}
              src="/assets/dctImage.svg"
              alt="logo"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default DCTSection;
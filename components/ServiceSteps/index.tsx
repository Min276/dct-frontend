import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const StepperComponent = dynamic(import("./StepperComponent"), { ssr: false });

const ServiceSteps: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 py-10 md:px-24 md:pt-14 md:pb-20 bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8">
          {t("landing:digitalMarketing.servicesStepByStep.title")}
        </Typography>
      </motion.div>
      <Box className="flex flex-col-reverse md:flex-row flex-wrap justify-around items-center gap-y-8 mt-2">
        <StepperComponent />
        <Box className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/digitalMarketing/serviceExplain.svg"
              alt="dct app mockup"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceSteps;
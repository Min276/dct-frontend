import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const StepperComponent = dynamic(import("./StepperComponent"), { ssr: false });
const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });

const ServiceSteps: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 py-16 md:px-24 md:pt-14 md:pb-20 bg-white">
      <AnimationFrame>
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8">
          {t("landing:digitalMarketing.servicesStepByStep.title")}
        </Typography>
      </AnimationFrame>
      <Box className="flex flex-col-reverse justify-start items-start lg:flex-row flex-wrap md:!justify-around md:!items-center gap-y-8 mt-2">
        <StepperComponent />
        <Box className="w-full md:w-1/2 flex justify-center md:justify-end">
          <AnimationFrame>
            <Image
              width={800}
              height={800}
              src="/assets/digitalMarketing/serviceExplain.svg"
              alt="dct app mockup"
            />
          </AnimationFrame>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceSteps;
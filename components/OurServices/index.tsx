import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { servicesData } from "../../data/testData";
import { useTranslation } from "next-i18next";

const CardComponent = dynamic(import("./CardComponent"), { ssr: false });
const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });

const OurServices: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 py-10 md:px-24 md:pt-14 md:pb-20 bg-white">
      <AnimationFrame>
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8">
          {t("landing:ourServicesTitle")}
        </Typography>
      </AnimationFrame>
      <Box className="flex flex-wrap justify-center gap-y-8 sm:gap-x-8 xl:gap-x-8 mt-2">
        {servicesData.map((data, index: number) => (
          <CardComponent
            key={index}
            title={data.title}
            icon={data.icon}
            textColor={data.textColor}
            backgroundColor={data.backgroundColor}
            sideColor={data.sideColor}
            iconWidth={data.iconWidth}
            iconHeight={data.iconHeight}
            directory={data.directory}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OurServices;
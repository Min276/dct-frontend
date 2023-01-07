import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { ServicePackagesData } from "../../data/testData";
import { useTranslation } from "next-i18next";

const CardComponent = dynamic(import("./CardComponent"), { ssr: false });
const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });

const ServicePackages: FunctionComponent = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation("landing");
  const zhLang = i18n.language === "zh";
  return (
    <Box className="px-6 py-16 md:px-24 md:pt-14 md:pb-20 bg-white">
      <AnimationFrame>
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8">
          {t("landing:softwareDevelopment.servicePackages.title")}
        </Typography>
      </AnimationFrame>
      <Box className="flex flex-wrap justify-center items-center gap-y-8 mt-2">
        {ServicePackagesData.map((data: any, index: number) => (
          <CardComponent
            key={index}
            title={data.pricing}
            sideText={zhLang ? data.sideText.zh : data.sideText.en}
            tab={zhLang ? data.plan.zh : data.plan.en}
            textColor={data.textColor}
            backgroundColor={data.backgroundColor}
            restData={zhLang ? data.restData.zh : data.restData.en}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ServicePackages;
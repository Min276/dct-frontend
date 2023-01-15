import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";

const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../Breadcrumbs"), { ssr: false });

const SoftwareDevBanner: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="flex justify-center items-center w-full h-[43vh] sm:h-[54vh] md:h-[60vh] bg-no-repeat bg-center bg-cover bg-blend-multiply !bg-slate-200 bg-[url('/assets/softwareBanner.svg')]">
      <AnimationFrame>
        <Typography className="px-8 text-center text-white !text-2xl md:!text-4xl !font-semibold !leading-10">
          {t("landing:softwareDevelopment.title")}
        </Typography>
        <BreadcrumbsComponent text="Software Development" />
      </AnimationFrame>
    </Box>
  );
};

export default SoftwareDevBanner;
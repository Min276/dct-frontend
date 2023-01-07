import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";

const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../Breadcrumbs"), { ssr: false });

const DMBannerSection: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="flex justify-center items-center w-full h-[43vh] sm:h-[54vh] md:h-[60vh] bg-no-repeat bg-center bg-cover bg-blend-multiply bg-[url('/assets/digitalMarketing/banner.svg')]">
      <AnimationFrame>
        <Typography className="px-8 text-center text-white !text-2xl md:!text-4xl !font-semibold !leading-10">
          {t("landing:digitalMarketing.title")}
        </Typography>
        <BreadcrumbsComponent text="Digital Marketing" />
      </AnimationFrame>
    </Box>
  );
};

export default DMBannerSection;
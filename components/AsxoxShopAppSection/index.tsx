import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });
const ActionButton = dynamic(import("../ActionButton"), { ssr: false });
const DownloadLinkIcons = dynamic(import("../DownloadLinkIcons"), {
  ssr: false,
});

const AsxoxShopAppSection: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 pt-10 pb-14 md:px-32 md:pt-14 md:py-20 bg-[#0C2E5C]">
      <AnimationFrame>
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-white text-center py-8 pb-12">
          {t("landing:asxoxSection.title")}
        </Typography>
      </AnimationFrame>
      <Box className="flex flex-col xl:flex-row items-center">
        <Box className="w-full xl:w-1/2 flex justify-center xl:justify-start">
          <AnimationFrame>
            <Image
              width={380}
              height={380}
              src="/assets/asxoxImage.svg"
              alt="logo"
            />
          </AnimationFrame>
        </Box>
        <Box className="w-full xl:w-1/2 md:text-center flex flex-col xl:justify-end mt-8 xl:mt-0 xl:text-left">
          <Typography className="!text-lg md:!text-xl !font-semibold text-white">
            {t("landing:asxoxSection.subTitle")}
          </Typography>
          <Typography className="text-white !font-medium py-4 !leading-7">
            {t("landing:asxoxSection.description")}
          </Typography>
          <ul className="list-disc pl-4 pb-8 text-white !leading-10 md:m-auto xl:m-0">
            <li>{t("landing:asxoxSection.list.listItemOne")}</li>
            <li>{t("landing:asxoxSection.list.listItemTwo")}</li>
          </ul>
          <AnimationFrame>
            <ActionButton
              directory="https://play.google.com/store/apps/details?id=com.asxox.mkza&hl=en&gl=US"
              translatedText={t("landing:asxoxSection.button")}
            />
          </AnimationFrame>
        </Box>
      </Box>
      <Box className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-12 md:pt-16">
        <DownloadLinkIcons />
      </Box>
    </Box>
  );
};

export default AsxoxShopAppSection;
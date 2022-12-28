import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });
const ActionButton = dynamic(import("../ActionButton"), { ssr: false });

const EventLotterySection: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box
      className="px-6 pt-10 pb-14 md:px-24 md:pt-14 md:py-20 bg-[#0C2E5C]"
      id="luckyStarSection"
    >
      <AnimationFrame>
        <Typography className="!text-xl md:!text-2xl !font-semibold text-white text-center py-8 md:pb-12">
          {t("landing:dctLotterySection.title")}
        </Typography>
      </AnimationFrame>
      <Box className="flex flex-col xl:flex-row items-center">
        <Box className="w-full xl:w-1/2 md:text-center xl:text-left">
          <Typography className="!text-lg md:!text-xl !font-semibold text-white">
            {t("landing:dctLotterySection.subTitle")}
          </Typography>
          <Typography className="text-white !font-medium py-4 pb-10 !leading-7">
            {t("landing:dctLotterySection.description")}
          </Typography>
          <AnimationFrame>
            <ActionButton
              directory="#"
              translatedText={t("landing:dctLotterySection.button")}
            />
          </AnimationFrame>
        </Box>
        <Box className="w-full xl:w-1/2 flex justify-center xl:justify-end mt-16 xl:mt-0">
          <AnimationFrame>
            <Image
              width={450}
              height={450}
              src="/assets/eventLottery.svg"
              alt="event lottery"
            />
          </AnimationFrame>
        </Box>
      </Box>
    </Box>
  );
};

export default EventLotterySection;
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import YouTube, { YouTubeProps } from "react-youtube";

const AnimationFrame = dynamic(import("../AnimationFrame"), { ssr: false });
const ActionButton = dynamic(import("../ActionButton"), { ssr: false });

const DCTSection: FunctionComponent = () => {
  const { t } = useTranslation();
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box className="px-6 pt-10 pb-18 md:px-24 md:pt-14 md:py-20 bg-white">
      <AnimationFrame>
        <Typography className="!text-[1.35rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 md:pb-12">
          {t("landing:dctSection.title")}
        </Typography>
      </AnimationFrame>
      <Box className="flex flex-col xl:flex-row items-center">
        <Box className="w-full xl:w-1/2 md:text-center xl:text-left">
          <Typography className="!text-lg md:!text-xl !font-semibold text-[#0C2E5C]">
            {t("landing:dctSection.subTitle")}
          </Typography>
          <Typography className="text-[#0C2E5C] !font-medium py-4 !leading-7">
            {t("landing:dctSection.description")}
          </Typography>
          <Box>
            <Box className="flex items-center md:justify-center xl:justify-start">
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
          <AnimationFrame>
            <ActionButton
              directory="https://goo.gl/maps/WxThXFRDcAw1rKqBA"
              translatedText={t("landing:dctSection.button")}
            />
          </AnimationFrame>
        </Box>
        <Box className="w-full xl:w-1/2 md:flex justify-center xl:justify-end py-12 xl:py-0">
          <AnimationFrame>
            <YouTube
              videoId="r8AZSmhhghs"
              opts={opts}
              onReady={onPlayerReady}
              iframeClassName="w-full h-[300px] sm:h-[400px] md:w-[500px] rounded-md"
            />
          </AnimationFrame>
        </Box>
      </Box>
    </Box>
  );
};

export default DCTSection;
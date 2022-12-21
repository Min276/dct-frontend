import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import Link from "next/link";

const Footer: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 pt-14 pb-10 md:px-24 md:pt-20 md:py-12 bg-[#0C2E5C]">
      <Box className="flex flex-col md:flex-row justify-evenly md:items-center mb-20 gap-y-8">
        <Box className="flex flex-col md:w-4/5">
          <Image width={100} height={100} src="/assets/logo.svg" alt="logo" />
          <Typography className="text-white pt-4 !leading-7">
             {t("landing:footer.description")}
          </Typography>
        </Box>
        <Box className="flex flex-col md:w-3/5 md:mx-32">
          <Typography className="!text-lg text-white !font-semibold">
            {t("landing:footer.email")}
          </Typography>
          <Box className="flex items-center py-4 mb-2">
            <input
              placeholder="Enter your email address"
              className="px-4 py-3 bg-white text-[#1E1D1D] rounded-l-md w-2/3"
            />
            <Box
              className="cursor-pointer w-fit bg-white px-4 py-3 text-[#0C2E5C] !font-medium rounded-r-md shadow-md flex items-center"
              sx={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <FiSend className="text-2xl" /> &nbsp;{t("landing:footer.submit")}
            </Box>
          </Box>
          <Typography className="text-white">
            {t("landing:footer.reachout")}
            <Link href="tel:+959968358888">+95 9968358888</Link>
          </Typography>
        </Box>
        <Box className="flex flex-col md:w-1/5 mt-2 md:mt-0">
          <Typography className="!text-lg text-white !font-semibold pb-4">
            {t("landing:footer.followus.title")}
          </Typography>
          <Box className="flex flex-col gap-y-4 text-white">
            <Link href="https://www.facebook.com/DataCloudTechnologyCoLtd/">{t("landing:footer.followus.facebook")}</Link>
            <Link href="https://www.tiktok.com/@asxoxecommerce">{t("landing:footer.followus.tiktok")}</Link>
            <Link href="https://www.youtube.com/channel/UCnXbJ5K2pmBIh_HJaUuh9kg">{t("landing:footer.followus.youtube")}</Link>
          </Box>
        </Box>
      </Box>
      <Typography className="text-white !text-lg text-center">
        Copyright &copy; 2022 | Digital Cloud Technology
      </Typography>
    </Box>
  );
};

export default Footer;
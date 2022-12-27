import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AsxoxShopAppSection: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Box className="px-6 pt-10 pb-14 md:px-32 md:pt-14 md:py-20 bg-[#0C2E5C]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-white text-center py-8 pb-12">
          {t("landing:asxoxSection.title")}
        </Typography>
      </motion.div>
      <Box className="flex flex-col xl:flex-row items-center">
        <Box className="w-full xl:w-1/2 md:flex justify-center xl:justify-start">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <Image
              width={380}
              height={380}
              src="/assets/asxoxImage.svg"
              alt="logo"
            />
          </motion.div>
        </Box>
        <Box className="w-full xl:w-1/2 md:text-center flex flex-col xl:justify-end mt-8 xl:mt-0 xl:text-left">
          <Typography className="!text-lg md:!text-xl !font-semibold text-white">
            {t("landing:asxoxSection.subTitle")}
          </Typography>
          <Typography className="text-white !font-medium py-4 !leading-7">
            {t("landing:asxoxSection.description")}
          </Typography>
          <ul className="list-disc pl-4 pb-8 text-white !leading-10">
            <li>{t("landing:asxoxSection.list.listItemOne")}</li>
            <li>{t("landing:asxoxSection.list.listItemTwo")}</li>
          </ul>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.asxox.mkza&hl=en&gl=US"
              target="_blank"
              className="px-4 py-3 w-fit rounded-md text-[#0C2E5C] bg-white cursor-pointer !font-semibold"
            >
              {t("landing:asxoxSection.button")}
            </Link>
          </motion.div>
        </Box>
      </Box>
      <Box className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-12 md:pt-16">
        <Link
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.asxox.mkza&pli=1"
        >
          <Image
            width={240}
            height={240}
            src="/assets/dctAppSection/appstore.svg"
            alt="appstore"
            className="w-56 md:w-60"
          />
        </Link>
        <Link
          target="_blank"
          href="https://apps.apple.com/us/app/asxox/id1590791745"
        >
          <Image
            width={240}
            height={240}
            src="/assets/dctAppSection/playstore.svg"
            alt="playstore"
            className="w-56 md:w-60"
          />
        </Link>
        <Link
          target="_blank"
          href="https://appgallery.huawei.com/app/C105045159"
        >
          <Image
            width={240}
            height={240}
            src="/assets/dctAppSection/appgallery.svg"
            alt="appgallery"
            className="w-56 md:w-60"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.mediafire.com/error.php?errno=320&origin=download"
        >
          <Image
            width={240}
            height={240}
            src="/assets/dctAppSection/directlink.svg"
            alt="directlink"
            className="w-56 md:w-60"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default AsxoxShopAppSection;
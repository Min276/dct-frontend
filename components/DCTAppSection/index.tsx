import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const QRCodeDialog = dynamic(import("../DialogComponent"), { ssr: false });

const DCTAppSection: FunctionComponent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Box className="px-6 pt-10 pb-14 md:px-24 md:pt-14 md:py-20 bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-xl md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 md:pb-14">
          {t("landing:dctAppSection.title")}
        </Typography>
      </motion.div>
      <Box className="flex flex-col xl:flex-row items-center">
        <Box className="w-full xl:w-1/2 md:text-center xl:text-left">
          <Typography className="!text-lg md:!text-xl !font-semibold text-[#0C2E5C] pb-4">
            {t("landing:dctAppSection.subTitle")}
          </Typography>
          <ul className="list-disc pl-4 pb-8 text-[#1E1D1D] !leading-10 md:w-fit md:m-auto xl:m-0">
            <li>{t("landing:dctAppSection.list.listItemOne")}</li>
            <li>{t("landing:dctAppSection.list.listItemTwo")}</li>
            <li>{t("landing:dctAppSection.list.listItemThree")}</li>
          </ul>
          <Box className="flex flex-col md:flex-row justify-center xl:justify-start items-center">
            <Image
              width={100}
              height={100}
              src="/assets/dctAppSection/dctLogo.svg"
              alt="dct logo"
              className="hidden md:block"
            />
            <Box className="flex items-center md:pl-14 pb-8 md:pb-0">
              <Box className="flex flex-col text-[#1E1D1D] pr-6">
                <Typography className="text-[#0C2E5C] !font-semibold pb-2">
                  {t("landing:dctAppSection.downloadTitle")}
                </Typography>
                <Typography className="text-[#1E1D1D] !font-semibold">
                  {" "}
                  {t("landing:dctAppSection.scanQRTitle")}
                </Typography>
              </Box>
              <Image
                onClick={() => setOpen(true)}
                width={100}
                height={100}
                src="/assets/dctAppSection/dctQRCode.svg"
                alt="dct qr code"
                className="shadow-xl cursor-pointer"
              />
              {open && (
                <QRCodeDialog
                  {...{
                    open,
                    setOpen,
                    handleClose: () => setOpen(false),
                    dialogTitle: t("landing:dctAppSection.qrCodeTitle"),
                    image: "/assets/dctAppSection/dctQRCode.svg",
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
        <Box className="w-full xl:w-1/2 flex justify-center xl:justify-end md:pt-12 xl:pt-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <Image
              width={500}
              height={500}
              src="/assets/dctAppSection/dctAppMockup.svg"
              alt="dct app mockup"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default DCTAppSection;
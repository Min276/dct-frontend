import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const QRCodeDialog = dynamic(import("../DialogComponent"), { ssr: false });

const SYRealEstateSection: FunctionComponent = () => {
  const { t } = useTranslation();
  const [openModalOne, setOpenModalOne] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Box className="px-6 pt-10 pb-14 md:px-32 md:pt-14 md:py-20 bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
      >
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 pb-12">
          {t("landing:sySection.title")}
        </Typography>
      </motion.div>
      <Box className="flex flex-col md:flex-row items-center">
        <Box className="w-full md:w-1/2 flex justify-center md:justify-start">
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
              src="/assets/syImage.svg"
              alt="sy real estate company"
              className="shadow-xl rounded-lg"
            />
          </motion.div>
        </Box>
        <Box className="w-full md:w-1/2 flex flex-col justify-end mt-8 md:mt-0">
          <Typography className="!text-lg md:!text-xl !font-semibold text-[#0C2E5C]">
            {t("landing:sySection.subTitle")}
          </Typography>
          <Typography className="text-[#0C2E5C] !font-medium py-4 !leading-7">
            {t("landing:sySection.description")}
          </Typography>
          <ul className="list-disc pl-4 pb-6 text-[#0C2E5C] !leading-10">
            <li>{t("landing:sySection.list.listItemOne")}</li>
            {/* <li>{t("landing:sySection.list.listItemTwo")}</li>
            <li>{t("landing:sySection.list.listItemThree")}</li> */}
          </ul>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            {/* <Link
              target="_blank"
              href="#"
              className="px-4 py-3 w-fit rounded-md bg-[#0C2E5C] text-white cursor-pointer !font-semibold"
            >
              {t("landing:sySection.button")}
            </Link> */}
            <Box className="flex flex-col md:flex-row md:items-center justify-between gap-y-6">
              <Box className="flex flex-col gap-y-3">
                <Typography className=" text-[#0C2E5C] !font-semibold">
                  {t("landing:sySection.contactUs")}
                </Typography>
                <Typography className="text-[#0C2E5C] !font-semibold">
                  <Link href="tel:09941181188" className="cursor-pointer">
                    +95 9941181188
                  </Link>
                </Typography>
              </Box>
              <Box className="flex items-center gap-x-8">
                <Image
                  onClick={() => {
                    setOpenModalOne(true);
                    setOpen(true);
                  }}
                  width={100}
                  height={100}
                  src="/assets/weChatQR/qrone.svg"
                  alt="sy real estate company qr code"
                  className="shadow-xl cursor-pointer"
                />
                <Image
                  onClick={() => {
                    setOpenModalTwo(true);
                    setOpen(true);
                  }}
                  width={100}
                  height={100}
                  src="/assets/weChatQR/qrtwo.svg"
                  alt="sy real estate company qr code"
                  className="shadow-xl cursor-pointer"
                />
                {openModalOne && (
                  <QRCodeDialog
                    {...{
                      open,
                      setOpen,
                      handleClose: () => {
                        setOpen(false);
                        setOpenModalOne(false);
                      },
                      dialogTitle: t("landing:sySection.qrCodeTitle"),
                      image: "/assets/weChatQR/qrone.svg",
                    }}
                  />
                )}
                {openModalTwo && (
                  <QRCodeDialog
                    {...{
                      open,
                      setOpen,
                      handleClose: () => {
                        setOpen(false);
                        setOpenModalTwo(false);
                      },
                      dialogTitle: t("landing:sySection.qrCodeTitle"),
                      image: "/assets/weChatQR/qrtwo.svg",
                    }}
                  />
                )}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default SYRealEstateSection;
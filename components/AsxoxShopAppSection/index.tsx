import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const AsxoxShopAppSection: FunctionComponent = () => {
  return (
    <Box className="px-6 pt-10 pb-14 md:px-32 md:pt-14 md:py-20 bg-[#0C2E5C]">
      <Typography className="!text-2xl !font-semibold text-white text-center py-8 pb-12">
        About our Asxox Shop & App
      </Typography>
      <Box className="flex flex-col md:flex-row items-center">
        <Box className="w-full md:w-1/2">
          <Image
            width={380}
            height={380}
            src="/assets/asxoxImage.svg"
            alt="logo"
          />
        </Box>
        <Box className="w-full md:w-1/2 flex flex-col justify-end mt-8 md:mt-0">
          <Typography className="!text-xl !font-semibold text-white">
            Asxox Shop and App Feature
          </Typography>
          <Typography className="text-white !font-medium py-4 !leading-7">
            Lorem ipsum dolor sit amet consectetur. Posuere ipsum donec
            porttitor euismod ultrices tristique. Mauris tortor consequat lectus
            consequat mi. Facilisi tortor in fringilla risus pellentesque ac
            lectus.
          </Typography>
          <ul className="list-disc pl-4 pb-8 text-white !leading-10">
            <li>Lorem ipsum dolor sit amet consectetur sit amet </li>
            <li>Lorem ipsum dolor sit amet consectetur sit amet </li>
          </ul>
          <Link
            href="https://play.google.com/store/apps/details?id=com.asxox.mkza&hl=en&gl=US"
            target="_blank"
            className="px-4 py-2 w-fit rounded-md text-[#0C2E5C] bg-white cursor-pointer !font-semibold"
          >
            Explore Asxox App
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default AsxoxShopAppSection;
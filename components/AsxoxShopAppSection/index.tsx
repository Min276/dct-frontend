import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const AsxoxShopAppSection: FunctionComponent = () => {
  return (
    <Box className="px-6 pt-10 pb-14 md:px-32 md:pt-14 md:py-20 bg-[#0C2E5C]">
      <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-white text-center py-8 pb-12">
        About our Asxox Shop & App
      </Typography>
      <Box className="flex flex-col md:flex-row items-center">
        <Box className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            width={380}
            height={380}
            src="/assets/asxoxImage.svg"
            alt="logo"
          />
        </Box>
        <Box className="w-full md:w-1/2 flex flex-col justify-end mt-8 md:mt-0">
          <Typography className="!text-lg md:!text-xl !font-semibold text-white">
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
      <Box className="flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-between gap-y-4 pt-12 md:pt-16">
        <Link href="https://play.google.com/store/apps/details?id=com.asxox.mkza&pli=1">
          <Image
            width={240}
            height={240}
            src="/assets/dctAppSection/appstore.svg"
            alt="appstore"
            className="w-56 md:w-60"
          />
        </Link>
        <Link href="https://apps.apple.com/us/app/asxox/id1590791745">
          <Image
            width={240}
            height={240}
            src="/assets/dctAppSection/playstore.svg"
            alt="playstore"
            className="w-56 md:w-60"
          />
        </Link>
        <Link href="https://appgallery.huawei.com/app/C105045159">
          <Image
            width={240}
            height={240}
            src="/assets/dctAppSection/appgallery.svg"
            alt="appgallery"
            className="w-56 md:w-60"
          />
        </Link>
        <Link href="https://www.mediafire.com/error.php?errno=320&origin=download">
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
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const DCTSection: FunctionComponent = () => {
  return (
    <Box className="px-24 pt-14 py-20 bg-white">
      <Typography className="!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 pb-12">
        Let&apos;s take a glance at DCT
      </Typography>
      <Box className="flex items-center">
        <Box className="w-1/2">
          <Typography className="!text-xl !font-semibold text-[#0C2E5C]">
            Digital Cloud Technology
          </Typography>
          <Typography className="text-[#0C2E5C] !font-medium py-4 !leading-7">
            Lorem ipsum dolor sit amet consectetur. Posuere ipsum donec
            porttitor euismod ultrices tristique. Mauris tortor consequat lectus
            consequat mi. Facilisi tortor in fringilla risus pellentesque ac
            lectus.
          </Typography>
          <Box>
            <Box className="flex items-center">
              <FaMapMarkerAlt className="text-[#EF5353] !text-xl" />
              <Typography className="pl-2 text-[#0C2E5C] !font-semibold">
                Our Location
              </Typography>
            </Box>
            <Typography className="pt-2 pb-8 text-[#1E1D1D] pl-7">
              Time City, Office Tower -3, (16) Floor, No-1602 ,<br /> Kamayut
              Township, Yangon, Myanmar.
            </Typography>
          </Box>
          <Link
            target="_blank"
            className="px-5 py-3 w-fit rounded-md text-white bg-[#0C2E5C] cursor-pointer !font-semibold"
            href="https://goo.gl/maps/WxThXFRDcAw1rKqBA"
          >
            View in Google Map
          </Link>
        </Box>
        <Box className="w-1/2 flex justify-end">
          <Image
            width={500}
            height={500}
            src="/assets/dctImage.svg"
            alt="logo"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DCTSection;
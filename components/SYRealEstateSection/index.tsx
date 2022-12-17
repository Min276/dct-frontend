import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const SYRealEstateSection: FunctionComponent = () => {
  return (
    <Box className="px-6 pt-10 pb-14 md:px-32 md:pt-14 md:py-20 bg-white">
      <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 pb-12">
        About SY Real Estate Agency
      </Typography>
      <Box className="flex flex-col md:flex-row items-center">
        <Box className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            width={500}
            height={500}
            src="/assets/dctImage.svg"
            alt="sy real estate company"
          />
        </Box>
        <Box className="w-full md:w-1/2 flex flex-col justify-end mt-8 md:mt-0">
          <Typography className="!text-lg md:!text-xl !font-semibold text-[#0C2E5C]">
            Our Agency Background & Services
          </Typography>
          <Typography className="text-[#0C2E5C] !font-medium py-4 !leading-7">
            Lorem ipsum dolor sit amet consectetur. Posuere ipsum donec
            porttitor euismod ultrices tristique. Mauris tortor consequat lectus
            consequat mi. Facilisi tortor in fringilla risus pellentesque ac
            lectus.
          </Typography>
          <ul className="list-disc pl-4 pb-6 text-[#0C2E5C] !leading-10">
            <li>Lorem ipsum dolor sit amet consectetur sit amet </li>
            <li>Lorem ipsum dolor sit amet consectetur sit amet </li>
            <li>Lorem ipsum dolor sit amet consectetur sit amet </li>
          </ul>
          <Link
            href="#"
            className="px-4 py-2 w-fit rounded-md bg-[#0C2E5C] text-white cursor-pointer !font-semibold"
          >
            Explore SY Agency
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SYRealEstateSection;
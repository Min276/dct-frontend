import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const EventLotterySection: FunctionComponent = () => {
  return (
    <Box className="px-6 pt-10 pb-14 md:px-24 md:pt-14 md:py-20 bg-[#EDECEC]">
      <Typography className="!text-xl md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 md:pb-12">
        DCT Event Lottery
      </Typography>
      <Box className="flex flex-col md:flex-row items-center">
        <Box className="w-full md:w-1/2">
          <Typography className="!text-lg md:!text-xl !font-semibold text-[#0C2E5C]">
            How our lottery system works
          </Typography>
          <Typography className="text-[#0C2E5C] !font-medium py-4 pb-8 !leading-7">
            Lorem ipsum dolor sit amet consectetur. Posuere ipsum donec
            porttitor euismod ultrices tristique. Mauris tortor consequat lectus
            consequat mi. Facilisi tortor in fringilla risus pellentesque ac
            lectus.
          </Typography>
          <Link
            href="#"
            className="px-5 py-3 mt-4 w-fit rounded-md text-white bg-[#0C2E5C] cursor-pointer !font-semibold"
          >
            Explore DCT App
          </Link>
        </Box>
        <Box className="w-full md:w-1/2 flex justify-end mt-12 md:mt-0">
          <Image
            width={450}
            height={450}
            src="/assets/eventLottery.svg"
            alt="event lottery"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EventLotterySection;
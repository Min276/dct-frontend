import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";

const EventLotterySection: FunctionComponent = () => {
  return (
    <Box className="px-24 pt-14 py-20 bg-[#EDECEC]">
      <Typography className="!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 pb-12">
        DCT Event Lottery
      </Typography>
      <Box className="flex items-center">
        <Box className="w-1/2">
          <Typography className="!text-xl !font-semibold text-[#0C2E5C]">
            How our lottery system works
          </Typography>
          <Typography className="text-[#0C2E5C] !font-medium py-4 !leading-7">
            Lorem ipsum dolor sit amet consectetur. Posuere ipsum donec
            porttitor euismod ultrices tristique. Mauris tortor consequat lectus
            consequat mi. Facilisi tortor in fringilla risus pellentesque ac
            lectus.
          </Typography>
          <Box className="px-5 py-3 mt-4 w-fit rounded-md text-white bg-[#0C2E5C] cursor-pointer !font-semibold">
            Call an action
          </Box>
        </Box>
        <Box className="w-1/2 flex justify-end">
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
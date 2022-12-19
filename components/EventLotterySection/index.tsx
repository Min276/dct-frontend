import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EventLotterySection: FunctionComponent = () => {
  return (
    <Box className="px-6 pt-10 pb-14 md:px-24 md:pt-14 md:py-20 bg-[#0C2E5C]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
      >
        {" "}
        <Typography className="!text-xl md:!text-2xl !font-semibold text-white text-center py-8 md:pb-12">
          DCT Event Lottery
        </Typography>
      </motion.div>
      <Box className="flex flex-col md:flex-row items-center">
        <Box className="w-full md:w-1/2">
          <Typography className="!text-lg md:!text-xl !font-semibold text-white">
            How our lottery system works
          </Typography>
          <Typography className="text-white !font-medium py-4 pb-10 !leading-7">
            Lorem ipsum dolor sit amet consectetur. Posuere ipsum donec
            porttitor euismod ultrices tristique. Mauris tortor consequat lectus
            consequat mi. Facilisi tortor in fringilla risus pellentesque ac
            lectus.
          </Typography>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
          >
            <Link
              target="_blank"
              href="#"
              className="px-5 py-3 w-fit rounded-md text-[#0C2E5C] bg-white cursor-pointer !font-semibold"
            >
              Explore DCT App
            </Link>
          </motion.div>
        </Box>
        <Box className="w-full md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
          >
            <Image
              width={450}
              height={450}
              src="/assets/eventLottery.svg"
              alt="event lottery"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default EventLotterySection;
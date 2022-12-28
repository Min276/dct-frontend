import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface CardProps {
  key: number;
  title: string;
  tab: string;
  pageLike: string;
  duration: string;
  report: string;
  target: string;
  textColor?: string;
  backgroundColor?: string;
  restData?: any;
}

const CardComponent: FunctionComponent<CardProps> = ({
  key,
  title,
  tab,
  pageLike,
  duration,
  report,
  target,
  textColor,
  backgroundColor,
  restData,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { delay: 0.4, duration: 0.5 },
      }}
    >
      <Box
        key={key}
        className="relative w-4/5 px-12 py-10 rounded-md"
        sx={{
          backgroundColor: backgroundColor,
          boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25);",
          margin: "0 auto",
        }}
      >
        <Box className="flex flex-col justify-center items-center">
          <Box className="absolute left-0 top-6 px-4 py-2 rounded-r-full bg-[#0C2E5C] text-white">
            <Typography className=" !font-medium !text-lg">{tab}</Typography>
          </Box>
            <Typography className="!text-3xl !font-semibold mb-2 pt-14"
             sx={{ color: textColor }}>
              {title}
            </Typography>
            <Typography className="!text-[1.17rem] text-[#1E1D1D] !font-semibold mb-2"
             sx={{ color: textColor }}>
              Approximate Page Like
            </Typography>
            <Typography className="!text-2xl !font-semibold"
             sx={{ color: textColor }}>
              {pageLike}
            </Typography>
          <Box className="flex flex-col gap-y-4 w-full pt-6">
              <Box className="flex">
                <BsFillCheckCircleFill className="!text-xl w-8 text-[#0C2E5C]" />
                <Typography className="pl-2 text-base w-[17rem] text-[#1E1D1D]">
                   Duration: {duration}
                </Typography>
              </Box>
              <Box className="flex">
                <BsFillCheckCircleFill className="!text-xl w-8 text-[#0C2E5C]" />
                <Box className="flex justify-between w-[17rem]">
                <Typography className="pl-2 text-base text-[#1E1D1D]">
                   Report: {report}
                </Typography>
                <Typography className="pl-2 text-base text-[#1E1D1D]">
                   Target: {target}
                </Typography>
                </Box>
              </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CardComponent;
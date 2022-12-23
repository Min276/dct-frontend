import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface CardProps {
  key: number;
  title: string;
  tab: string;
  textColor?: string;
  backgroundColor?: string;
  restData?: any;
}

const CardComponent: FunctionComponent<CardProps> = ({
  key,
  title,
  tab,
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
        className="relative w-4/5 h-[468px] px-16 py-10 rounded-md cursor-pointer"
        sx={{
          backgroundColor: backgroundColor,
          boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25);",
        }}
      >
        <Box className="flex flex-col justify-center items-center">
          <Box className="absolute left-0 top-6 px-4 py-2 rounded-r-full bg-[#0C2E5C] text-white">
            <Typography className=" !font-medium !text-lg">{tab}</Typography>
          </Box>
          <Typography
            className="flex !text-xl !font-semibold items-end gap-x-2 mb-6 pt-14"
            sx={{ color: textColor }}
          >
            <Typography className="!text-3xl !font-semibold">
              {title}{" "}
            </Typography>{" "}
            per month
          </Typography>
          <Box className="flex flex-col gap-y-4">
            {restData?.map((item: any, index: number) => (
              <Box className="flex" key={index}>
                <BsFillCheckCircleFill className="!text-xl w-8 text-[#0C2E5C]" />
                <Typography className="pl-2 text-base w-64 text-[#1E1D1D]">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CardComponent;
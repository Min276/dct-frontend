import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {BsFillCheckCircleFill} from "react-icons/bs";

interface CardProps {
  title: string;
  tab: string;
  textColor?: string;
  backgroundColor?: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive?: string;
  itemSix: string;
}

const CardComponent: FunctionComponent<CardProps> = ({
  title,
  tab,
  textColor,
  backgroundColor,
  itemOne,
  itemTwo,
  itemThree,
  itemFour,
  itemFive,
  itemSix,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
    >
      <Box
        className="relative w-4/5 px-10 py-14 rounded-md cursor-pointer"
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
            className="flex !text-xl !font-semibold items-end gap-x-2 pt-12"
            sx={{ color: textColor }}
          >
            <Typography className="!text-3xl !font-semibold">{title} </Typography> per month
          </Typography>
          <Box className="flex flex-col gap-y-6">
             <Typography className="flex text-[#0C2E5C]">
                <BsFillCheckCircleFill className="text-xl"/> &nbsp; {itemOne}
             </Typography>
             <Typography className="flex text-[#0C2E5C]">
                <BsFillCheckCircleFill />  &nbsp; {itemTwo}
             </Typography>
             <Typography className="flex text-[#0C2E5C]">
                <BsFillCheckCircleFill />  &nbsp; {itemThree}
             </Typography>
             <Typography className="flex text-[#0C2E5C]">
                <BsFillCheckCircleFill />  &nbsp; {itemFour}
             </Typography>
             { itemFive &&
              (<Typography className="flex text-[#0C2E5C]">
                <BsFillCheckCircleFill />  &nbsp; {itemFive}
             </Typography>
              )}
              <Typography className="flex text-[#0C2E5C]">
                <BsFillCheckCircleFill />  &nbsp; {itemSix}
             </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CardComponent;
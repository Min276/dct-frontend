import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AnimationFrame from "../../AnimationFrame";

interface CardProps {
  key: number;
  title: string;
  sideText: string;
  tab: string;
  textColor?: string;
  backgroundColor?: string;
  restData?: any;
}

const CardComponent: FunctionComponent<CardProps> = ({
  key,
  title,
  sideText,
  tab,
  textColor,
  backgroundColor,
  restData,
}) => {
  return (
    <AnimationFrame className="w-full sm:w-auto sm:odd:!-mr-16 sm:even:!-mr-16  md:even:!-mr-16  lg:first:!mr-0 lg:last:!-mr-16 lg:last:!ml-0 xl:even:!mr-0">
      <Box
        key={key}
        className="!w-full relative sm:!w-4/5 h-[480px] px-16 py-10 rounded-md !ml-0 !mr-0"
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
          <Box
            className="flex !text-xl !font-semibold items-end gap-x-2 pb-6 pt-14"
            sx={{ color: textColor }}
          >
            <Typography className="!text-3xl !font-semibold">
              {title}
            </Typography>
             {sideText}
          </Box>
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
    </AnimationFrame>
  );
};

export default CardComponent;
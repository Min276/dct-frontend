import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  textColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  sideColor?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const CardComponent: FunctionComponent<CardProps> = ({
  title,
  icon,
  textColor,
  backgroundColor,
  iconColor,
  sideColor,
  iconWidth,
  iconHeight,
}) => {
  return (
    <Box className="flex flex-col justify-center items-center px-10 py-14 rounded-md" sx={{ backgroundColor: backgroundColor, boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25);"}}>
      <Image 
      src={icon} 
      alt="icons" 
      width={iconWidth} 
      height={iconHeight} 
      />
      <Typography className="!text-lg !font-semibold pt-4" sx={{ color: textColor }}>{title}</Typography>
    </Box>
  );
};

CardComponent.defaultProps = {
    iconWidth: 100,
    iconHeight: 100,
}

export default CardComponent;

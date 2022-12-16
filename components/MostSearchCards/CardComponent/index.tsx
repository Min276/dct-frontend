import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface CardProps {
  title: string;
  icon: string;
  textColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  sideColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  directory?: any;
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
  directory,
}) => {
  const router = useRouter();
  return (
    <Box className="w-72 border-l-8 px-10 py-14 rounded-md cursor-pointer" sx={{ backgroundColor: backgroundColor, borderColor: sideColor,boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25);"}} onClick={()=> router.push(`${directory}`)}>
      <Box className="flex flex-col justify-center items-center">
      <Image 
      src={icon} 
      alt="icons" 
      width={iconWidth} 
      height={iconHeight} 
      />
      <Typography className="!text-lg !font-semibold pt-4" sx={{ color: textColor }}>{title}</Typography>
      </Box>
    </Box>
  );
};

CardComponent.defaultProps = {
    iconWidth: 100,
    iconHeight: 100,
}

export default CardComponent;

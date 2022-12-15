import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";

interface ServiceProps {
  title: string;
  icon: string;
  textColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const ServiceComponent: FunctionComponent<ServiceProps> = ({
  title,
  icon,
  textColor,
  backgroundColor,
  iconColor,
  iconWidth,
  iconHeight,
}) => {
  return (
    <Box className="w-1/5 flex flex-col justify-center items-center">
    <Box className="w-24 h-24 flex flex-col justify-center items-center rounded-full" sx={{ backgroundColor: backgroundColor, boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25);"}}>
      <Image 
      src={icon} 
      alt="icons" 
      width={iconWidth} 
      height={iconHeight} 
      />
      </Box>
      <Typography className="!text-lg !font-semibold pt-4" sx={{ color: textColor }}>{title}</Typography>
      </Box>
  );
};

ServiceComponent.defaultProps = {
    iconWidth: 100,
    iconHeight: 100,
}

export default ServiceComponent;
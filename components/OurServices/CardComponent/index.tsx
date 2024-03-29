import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimationFrame from "../../AnimationFrame";

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
  return (
    <AnimationFrame>
      <Link href={directory}>
        <Box
          className="w-72 h-[190px] border-l-8 px-6 py-14 rounded-md cursor-pointer"
          sx={{
            backgroundColor: backgroundColor,
            borderColor: sideColor,
            boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25);",
          }}
        >
          <Box className="flex flex-col justify-center items-center">
            <Image
              src={icon}
              alt="icons"
              width={iconWidth}
              height={iconHeight}
            />
            <Typography
              className="!text-lg !font-semibold pt-4"
              sx={{ color: textColor }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Link>
    </AnimationFrame>
  );
};

CardComponent.defaultProps = {
  iconWidth: 100,
  iconHeight: 100,
};

export default CardComponent;
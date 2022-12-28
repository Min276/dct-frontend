import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimationFrame from "../../AnimationFrame";

interface ProductProps {
  title: string;
  icon: string;
  textColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  directory?: any;
}

const ProductComponent: FunctionComponent<ProductProps> = ({
  title,
  icon,
  textColor,
  backgroundColor,
  iconColor,
  iconWidth,
  iconHeight,
  directory,
}) => {
  return (
    <Link
      className="w-2/5 md:w-1/5 flex flex-col justify-center items-center"
      href={directory}
      target={directory.includes("http") ? "_blank" : ""}
    >
      <AnimationFrame className="flex flex-col justify-center items-center">
        <Box
          className="cursor-pointer w-24 h-24 flex flex-col justify-center items-center rounded-full hover:ring-4 ring-[#94B8EA]"
          sx={{
            backgroundColor: backgroundColor,
            boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25);",
          }}
        >
          <Image src={icon} alt="icons" width={iconWidth} height={iconHeight} />
        </Box>
        <Typography
          className="!text-[1.1rem] !text-lg !font-semibold pt-4 text-center"
          sx={{ color: textColor }}
        >
          {title}
        </Typography>
      </AnimationFrame>
    </Link>
  );
};

ProductComponent.defaultProps = {
  iconWidth: 100,
  iconHeight: 100,
};

export default ProductComponent;
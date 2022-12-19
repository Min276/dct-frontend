import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  icon: string;
  textColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  directory?: any;
}

const ServiceComponent: FunctionComponent<ServiceProps> = ({
  title,
  icon,
  textColor,
  backgroundColor,
  iconColor,
  iconWidth,
  iconHeight,
  directory,
}) => {
  const router = useRouter();
  return (
    <Box
      className="w-2/5 md:w-1/5 flex flex-col justify-center items-center"
      onClick={() => router.push(`${directory}`)}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4 } }}
      >
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
      </motion.div>
    </Box>
  );
};

ServiceComponent.defaultProps = {
  iconWidth: 100,
  iconHeight: 100,
};

export default ServiceComponent;
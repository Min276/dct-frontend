import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { mostSearchCardData } from "../../data/testData";
import { motion } from "framer-motion";

const CardComponent = dynamic(import("./CardComponent"), { ssr: false });

const MostSearchCards: FunctionComponent = () => {
  return (
    <Box className="px-6 py-10 md:px-24 md:pt-14 md:pb-20 bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
      >
        <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-[#0C2E5C] text-center py-8">
          Most Search Categories
        </Typography>
      </motion.div>
      <Box className="flex flex-wrap justify-center md:justify-between gap-y-8 mt-2">
        {mostSearchCardData.map((data, index: number) => (
          <CardComponent
            key={index}
            title={data.title}
            icon={data.icon}
            textColor={data.textColor}
            backgroundColor={data.backgroundColor}
            sideColor={data.sideColor}
            iconWidth={data.iconWidth}
            iconHeight={data.iconHeight}
            directory={data.directory}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MostSearchCards;
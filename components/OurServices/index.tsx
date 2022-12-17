import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { servicesData } from "../../data/testData"; 

const ServiceComponent = dynamic(import("./ServiceComponent"), { ssr: false} );

const OurServices:FunctionComponent = () => {
    return(
        <Box className="px-6 pt-10 pb-14 md:px-24 md:pt-12 md:pb-24 bg-[#0C2E5C]">
            <Typography className="!text-[1.3rem] md:!text-2xl !font-semibold text-white text-center py-8 pb-12">Services DCT is offering</Typography>
            <Box className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-8 ">
            { servicesData.map((data, index:number) => (
            <ServiceComponent
              key={index}
              title={data.title}
              icon={data.icon}
              textColor={data.textColor}
              backgroundColor={data.backgroundColor}
              iconWidth={data.iconWidth}
              iconHeight={data.iconHeight}
              directory={data.directory}
            />
            )
           )}
            </Box>
        </Box>
    )
}

export default OurServices;
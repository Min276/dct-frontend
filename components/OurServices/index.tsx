import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { servicesData } from "../../data/testData"; 

const ServiceComponent = dynamic(import("./ServiceComponent"), { ssr: false} );

const OurServices:FunctionComponent = () => {
    return(
        <Box className="px-24 pt-12 pb-24 bg-[#0C2E5C]">
            <Typography className="!text-2xl !font-semibold text-white text-center py-8 pb-12">Services DCT is offering</Typography>
            <Box className="flex flex-wrap justify-center items-center gap-8">
            { servicesData.map((data, index:number) => (
            <ServiceComponent
              key={index}
              title={data.title}
              icon={data.icon}
              textColor={data.textColor}
              backgroundColor={data.backgroundColor}
              iconWidth={data.iconWidth}
              iconHeight={data.iconHeight}
            />
            )
           )}
            </Box>
        </Box>
    )
}

export default OurServices;
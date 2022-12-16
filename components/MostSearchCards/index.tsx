import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { mostSearchCardData } from "../../data/testData"; 

const CardComponent = dynamic(import("./CardComponent"), { ssr: false} );

const MostSearchCards:FunctionComponent = () => {
    return(
        <Box className="px-24 py-20 bg-white">
            <Typography className="!text-2xl !font-semibold text-[#0C2E5C] text-center py-8">Most Search Categories</Typography>
            <Box className="flex justify-evenly gap-x-8 mt-2">
            { mostSearchCardData.map((data, index:number) => (
            <CardComponent
              key={index}
              title={data.title}
              icon={data.icon}
              textColor={data.textColor}
              backgroundColor={data.backgroundColor}
              sideColor={data.sideColor}
              iconWidth={data.iconWidth}
              iconHeight={data.iconHeight}
            />
            )
           )}
            </Box>
        </Box>
    )
}

export default MostSearchCards;
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import DMBannerSection from "../components/DigitalMarketingBanner";
import Layout from "../components/Layout";

const DigitalMarketing:FunctionComponent = () => {
    return(
      <Layout>
        <Box>
            <Typography>Digital Marketing Page</Typography>
        </Box>
        <DMBannerSection />
      </Layout>
    )
}

export default DigitalMarketing;
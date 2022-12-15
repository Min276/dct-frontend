import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(import("../components/Layout"), {ssr: false});
const MostSearchCards = dynamic(import("../components/MostSearchCards"), {ssr: false});
const BannerSection = dynamic(import("../components/BannerSection"), {ssr: false});
const OurServices = dynamic(import("../components/OurServices"), {ssr: false});
const DCTSection = dynamic(import("../components/DCTSection"), {ssr: false});

const Home: FunctionComponent = () => {
    return(
        <Layout hiddenFooter>
            <BannerSection />
           <MostSearchCards />
           <OurServices />
           <DCTSection />
        </Layout>
    )
}

export default Home;
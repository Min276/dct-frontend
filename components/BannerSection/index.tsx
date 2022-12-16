import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import { FaFacebook, FaViber, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import dynamic from "next/dynamic";

const SearchFeature = dynamic(import("../SearchFeature"), {ssr: false});

const BannerSection:FunctionComponent = () => {
    return(
        <Box className="relative flex justify-center items-center w-full h-[60vh] bg-no-repeat bg-fixed bg-center bg-cover bg-blend-multiply bg-[url('/assets/banner.svg')]">
            <Typography className="px-8 text-center text-white !text-3xl md:!text-4xl !font-semibold">Welcome to Digital Cloud Technology</Typography>
            <SearchFeature />
        </Box>
    )
}

export default BannerSection;
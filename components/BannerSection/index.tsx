import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import { FaFacebook, FaViber, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const BannerSection:FunctionComponent = () => {
    return(
        <Box className="flex justify-center items-center w-full h-[60vh] bg-no-repeat bg-fixed bg-center bg-cover bg-blend-multiply bg-[url('/assets/banner.svg')]">
            <Typography className="text-white !text-5xl !font-semibold">Welcome to Digital Cloud Technology</Typography>
        </Box>
    )
}

export default BannerSection;
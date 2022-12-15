import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import Image from 'next/image';
import { FaFacebook, FaViber, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Navbar:FunctionComponent = () => {
    return(
       <Box className="flex px-24 py-8 bg-[#0C2E5C] w-full justify-between items-center">
          <Link href='#'>
          <Image 
           width={100}
           height={100}
              src="/assets/logo.svg"
              alt="logo"
              layout="fixed"
            />
            </Link>
            <Box className="flex gap-x-8 items-center">
              <Link href='#'>
                 <FaFacebook className="text-2xl text-white"/>
              </Link>
              <Link href='#'>
                 <FaViber className="text-2xl text-white"/>
              </Link>
              <Link href='#'>
                  <FaTiktok className="text-2xl text-white"/>
              </Link>
              <Link href='#'>
                 <FaYoutube className="text-3xl text-white"/>
              </Link>
            </Box>
       </Box>
    )
}

export default Navbar;
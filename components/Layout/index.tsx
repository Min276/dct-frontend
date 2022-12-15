import {Box, Typography} from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(import("../Navbar"), { ssr: false});

interface IProps {
  children: any;
  hiddenFooter: boolean;
}

const Layout: FunctionComponent<IProps> = ({children, hiddenFooter}) => {
    return(
      <Box>
        <Box className="flex">
           <Navbar />
            { !hiddenFooter && (<Typography>DCT</Typography>)}
        </Box>
        <Box>{children}</Box>
        </Box>
    )
}

export default Layout;
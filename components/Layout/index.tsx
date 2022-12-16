import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(import("../Navbar"), { ssr: false });
const Footer = dynamic(import("../Footer"), { ssr: false });

interface IProps {
  children: any;
}

const Layout: FunctionComponent<IProps> = ({ children }) => {
  return (
    <Box>
      <Box className="flex">
        <Navbar />
      </Box>
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
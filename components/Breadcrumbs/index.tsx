import { FunctionComponent } from "react";
import { Breadcrumbs, Chip, emphasize, styled, Box, Typography} from "@mui/material";
import { ImHome } from "react-icons/im";
import { GrFormNext } from "react-icons/gr";
import Link from "next/link";

interface IProps {
  text: string;
}

const BreadcrumbsComponent: FunctionComponent<IProps> = ({text}) => {
    const breadcrumbs = [
        <Link  key="1" color="inherit" href="/" className="!text-white !text-lg">
          Home Page
        </Link>,
        <Link
          href="#"
          key="2"
          color="inherit"
          className="!text-white !text-lg"
          aria-disabled
        >
          {text}
        </Link>
      ];
  return (
    <Box role="presentation"  className="flex justify-center">
      <Breadcrumbs
        aria-label="breadcrumb"
        className="!text-white p-4 md:p-6"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsComponent;
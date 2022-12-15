import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Link from "next/link";

const SearchFeature: FunctionComponent = () => {
  return (
    <Box className="flex justify-between items-center absolute bg-white w-3/5 bottom-0 p-5 py-3 rounded-md shadow-md px-6" sx={{ bottom: "-2rem"}}>
      <Box className="w-full flex items-center">
        <FaSearch className="!text-2xl" />
        <input
          type="search"
          placeholder="Search what you want here"
          className="!text-xl !font-medium w-full p-2 outline-0	"
        />
      </Box>
      <Box className="flex items-center pl-6 border-l-[0.2rem] border-[#343333]">
        <FaFilter className="!text-xl" />
        <Typography className="!text-lg !pl-2 !font-semibold !text-[#1E1D1D]">
          Filter
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchFeature;

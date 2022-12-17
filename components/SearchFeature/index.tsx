import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Link from "next/link";

const SearchFeature: FunctionComponent = () => {
  return (
    <Box
      className="flex justify-between items-center absolute bg-white md:w-3/5 bottom-0 py-2 md:py-3 rounded-md shadow-md px-6"
      sx={{ bottom: "-2rem" }}
    >
      <Box className="w-full flex items-center">
        <FaSearch className="!text-2xl md:!text-[1.8rem] text-[#343333]" />
        <input
          type="search"
          placeholder="Search what you want here"
          className="!text-xl md:!text-[1.4rem] !font-medium w-full pl-3 p-2 outline-0	bg-white text-[#343333]"
        />
      </Box>
      <Box className="cursor-pointer flex items-center pl-6 border-l-[0.2rem] border-[#343333]">
        <FaFilter className="!text-xl md:!text-2xl text-[#343333]" />
        <Typography className="!text-lg md:!text-xl !pl-2 !font-semibold !text-[#343333] hidden sm:block">
          Filter
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchFeature;
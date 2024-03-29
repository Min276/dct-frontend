import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchFeature: FunctionComponent = () => {
  const { t }: any = useTranslation();
  return (
    <Box
      className="flex justify-between items-center absolute bg-white md:w-3/5 bottom-0 py-2 md:py-3 rounded-md shadow-md px-6"
      sx={{ bottom: "-2rem!important" }}
    >
      <Box className="w-full flex items-center">
        <FaSearch className="!text-2xl md:!text-[1.8rem] text-[#0C2E5C]" />
        <input
          type="search"
          placeholder={t("landing:searchPlaceholder")}
          className="!text-xl md:!text-[1.4rem] !font-medium w-full pl-3 p-2 outline-0	bg-white text-[#0C2E5C]"
        />
      </Box>
      <Box className="sm:w-[35%] md:w-[24%] xl:w-[17%] cursor-pointer flex items-center pl-6 border-l-[0.2rem] border-[#0C2E5C]">
        <FaFilter className="!text-xl md:!text-2xl text-[#0C2E5C]" />
        <Typography className="!text-lg md:!text-xl !pl-2 !font-semibold !text-[#0C2E5C] hidden sm:block">
          {t("landing:filterText")}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchFeature;
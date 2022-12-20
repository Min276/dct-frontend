import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState, ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook, FaViber, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import MenuDropdown from "../MenuDropdown";

const Navbar: FunctionComponent = () => {
  const router = useRouter();
  const [language, setLanguage] = useState<string>(router.locale || "en");
  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return (
    <Box className="flex px-6 py-2 md:px-24 md:py-0 bg-[#0C2E5C] w-full justify-between items-center">
      <Link href="#">
        <Image
          width={100}
          height={100}
          className="w-20 h-20 md:w-24 md:h-24"
          src="/assets/logo.svg"
          alt="logo"
          layout="fixed"
        />
      </Link>
      <Box className="flex gap-x-4 md:gap-x-8 items-center">
        <select
          className="select p-[5px] rounded-md"
          value={language}
          onChange={changeLanguageHandler}
        >
          <option value="en">English</option>
          <option value="my">မြန်မာ</option>
          <option value="zh">中文字</option>
        </select>
        <MenuDropdown />
        <Box className="hidden sm:flex sm:gap-x-4 md:gap-x-8 items-center">
          <Link
            target="_blank"
            href="https://www.facebook.com/DataCloudTechnologyCoLtd/"
          >
            <FaFacebook className="text-2xl text-white" />
          </Link>
          <Link target="_blank" href="viber://chat?number=959961558491/">
            <FaViber className="text-2xl text-white" />
          </Link>
          <Link target="_blank" href="https://www.tiktok.com/@asxoxecommerce">
            <FaTiktok className="text-2xl text-white" />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/channel/UCnXbJ5K2pmBIh_HJaUuh9kg"
          >
            <FaYoutube className="text-3xl text-white" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { FaFacebook, FaViber, FaTiktok, FaYoutube } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const MenuDropdown = () => {
  return (
    <Box className="block sm:hidden">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button className="!text-white" {...bindTrigger(popupState)}>
              <FiMenu className="text-4xl" />
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/DataCloudTechnologyCoLtd/"
                >
                  <FaFacebook className="text-2xl text-[#0C2E5C]" />
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link target="_blank" href="viber://chat?number=959961558491/">
                  <FaViber className="text-2xl text-[#0C2E5C]" />
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@asxoxecommerce"
                >
                  <FaTiktok className="text-2xl text-[#0C2E5C]" />
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/channel/UCnXbJ5K2pmBIh_HJaUuh9kg"
                >
                  <FaYoutube className="text-3xl text-[#0C2E5C]" />
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
    </Box>
  );
};

export default MenuDropdown;
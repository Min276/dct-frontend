import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";

const DCTAppSection: FunctionComponent = () => {
  return (
    <Box className="px-24 pt-14 py-20 bg-white">
      <Typography className="!text-2xl !font-semibold text-[#0C2E5C] text-center py-8 pb-14">
        Easy scan & buy with DCT App
      </Typography>
      <Box className="flex items-center">
        <Box className="w-1/2">
          <Typography className="!text-xl !font-semibold text-[#0C2E5C] pb-4">
            Our app features include these:
          </Typography>
          <ul className="list-disc pl-4 pb-8 text-[#1E1D1D] !leading-10">
            <li>
              Lorem ipsum dolor sit amet consectetur sit amet sit amet
              consectetur
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur sit amet sit amet
              consectetur
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur sit amet sit amet
              consectetur
            </li>
          </ul>
          <Box className="flex items-center">
            <Image
              width={100}
              height={100}
              src="/assets/dctAppSection/dctLogo.svg"
              alt="dct logo"
            />
            <Box className="flex items-center pl-14">
              <Box className="flex flex-col text-[#1E1D1D] pr-6">
                <Typography className="text-[#0C2E5C] !font-semibold pb-2">
                  To download our App
                </Typography>
                <Typography>Scan QR code here:</Typography>
              </Box>
              <Image
                width={100}
                height={100}
                src="/assets/dctAppSection/dctQRCode.svg"
                alt="dct qr code"
              />
            </Box>
          </Box>
        </Box>
        <Box className="w-1/2 flex justify-end">
          <Image
            width={500}
            height={500}
            src="/assets/dctAppSection/dctAppMockup.svg"
            alt="dct app mockup"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DCTAppSection;
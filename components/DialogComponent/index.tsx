import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";

interface IProps {
  onClickHandler: any;
  image: string;
}

const QRCodeModal: FunctionComponent<IProps> = ({ onClickHandler, image }) => {
  return (
    <Box className="bg-[#0c2e506b] h-screen flex justify-center items-center overflow-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full transition duration-150 ease-in-out">
      <Box className="relative p-4 w-full max-w-4xl h-full md:h-auto flex justify-center items-center">
        <Box className="relative bg-white rounded-lg shadow">
          <Box className="flex justify-between items-center p-5 rounded-t border-b">
            <Typography className="text-xl text-[#0C2E5C] font-semibold">
              SY Agency <span className="text-[#333333]">QR Code</span>
            </Typography>
            <button
              type="button"
              className="text-[#333333] bg-transparent hover:bg-[#3B8CF7] hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={onClickHandler}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Box>
          <Box
            className="p-6 space-y-6 overflow-y-auto flex justify-center"
            id="modal-body"
            style={{ maxHeight: "calc(100vh - 103px)" }}
          >
            <Box>
              <Box className="w-full flex flex-col text-[#333333]">
                <Image
                  width={300}
                  height={300}
                  src={image}
                  alt="sy real estate company qr code"
                  className="shadow-xl"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QRCodeModal;
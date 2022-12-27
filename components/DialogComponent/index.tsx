import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import Image from "next/image";

interface IProps {
  open: boolean;
  handleClose?: any;
  dialogTitle: string;
  image: string;
}
const QRCodeDialog: FunctionComponent<IProps> = ({
  open,
  handleClose,
  dialogTitle,
  image,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ paddingY: "20px" }} id="alert-dialog-title">
        <Box className="flex items-center justify-between gap-4">
          <Typography
            fontSize="20px"
            className="!font-semibold !text-[#0C2E5C]"
          >
            {dialogTitle}
          </Typography>
          <IoCloseCircleSharp
            fontSize="34px"
            onClick={handleClose}
            color="#0C2E5C"
            className="cursor-pointer"
          />
        </Box>
      </DialogTitle>
      <DialogContent sx={{ maxWidth: "500px" }}>
        <Box className="w-full flex flex-col text-[#333333] justify-center items-center">
          <Image
            width={300}
            height={300}
            src={image}
            alt="sy real estate company qr code"
            className="shadow-xl"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeDialog;
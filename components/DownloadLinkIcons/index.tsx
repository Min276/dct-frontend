import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { DownloadLinkData } from "../../data/testData";

const DownloadLinkIcons: FunctionComponent = () => {
  return (
    <>
      {DownloadLinkData.map((data: any, index: number) => (
        <Box key={index} className="inline">
          <Link target="_blank" href={data.directory}>
            <Image
              width={data.width}
              height={data.height}
              src={data.image}
              alt={data.altText}
              className="w-56 md:w-60"
            />
          </Link>
        </Box>
      ))}
    </>
  );
};

export default DownloadLinkIcons;
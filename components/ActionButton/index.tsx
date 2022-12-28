import Link from "next/link";
import { FunctionComponent } from "react";

interface IProps {
  directory: string;
  translatedText: string;
}

const ActionButton: FunctionComponent<IProps> = ({
  directory,
  translatedText,
}) => {
  return (
    <Link
      href={directory}
      target="_blank"
      className="px-4 py-3 w-fit rounded-md text-[#0C2E5C] bg-white cursor-pointer !font-semibold hover:opacity-75"
    >
      {translatedText}
    </Link>
  );
};

export default ActionButton;
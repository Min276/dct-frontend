import Link from "next/link";
import { FunctionComponent } from "react";

interface IProps {
  directory: string;
  translatedText: string;
  background?: string;
  textColor?: string;
}

const ActionButton: FunctionComponent<IProps> = ({
  directory,
  translatedText,
  background,
  textColor,
}) => {
  return (
    <Link
      href={directory}
      target="_blank"
      className="px-4 py-3 w-fit rounded-md cursor-pointer !font-semibold hover:opacity-75"
      style={{ background: background, color: textColor }}
    >
      {translatedText}
    </Link>
  );
};

ActionButton.defaultProps = {
  background: "#0C2E5C",
  textColor: "white",
};

export default ActionButton;
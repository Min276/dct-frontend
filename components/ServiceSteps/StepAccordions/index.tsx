import { useState, SyntheticEvent, FunctionComponent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { stepsData } from "../../../data/testData";
import { useTranslation } from "next-i18next";

const FaqAccordions: FunctionComponent = () => {
  const { i18n } = useTranslation("landing");
  const zhLang = i18n.language === "zh";

  const BootstrapAccordion = styled(Accordion)({
    // boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.07)",
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.06);",

    padding: "10px",
    marginBottom: "12px",
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
    "&.MuiAccordion-rounded": {
      borderRadius: "10px",
    },
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
      <Box my={2} mb={4} className="xl:max-w-[450px] 2xl:max-w-[600px]">
        {stepsData?.map((data:any, index:number) => (
          <BootstrapAccordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary expandIcon={<MdExpandMore fontSize="24px" />}>
              <Typography className="!text-lg !font-semibold  text-[#0C2E5C]">{index+1}. {zhLang ? data.label.zh : data.label.en}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ul className="list-disc pl-4 text-[#0C2E5C]">
                {(zhLang ? data.description.zh : data.description.en).map(
                  (item:any, index:number) => (
                    <li
                      className="mb-3 !leading-7 !text-[1.04rem] font-normal text-[#1E1D1D]"
                      key={index}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </AccordionDetails>
          </BootstrapAccordion>
        ))}
      </Box>
  );
};

export default FaqAccordions;
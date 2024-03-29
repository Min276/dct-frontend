import { FunctionComponent, useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { stepsData } from "../../../data/testData";
import { useTranslation } from "next-i18next";

const StepperComponent: FunctionComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const { i18n } = useTranslation("landing");
  const zhLang = i18n.language === "zh";

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const BootstrapStepper = styled(Stepper)({
    "& .Mui-active .MuiStepIcon-root": { color: "#0C2E5C" },
    "& .Mui-completed .MuiStepIcon-root": { color: "#0C2E5C" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "#0C2E5C" },
  });

  return (
    <Box sx={{ maxWidth: 400 }} className="py-1">
      <BootstrapStepper activeStep={activeStep} orientation="vertical">
        {stepsData.map((step, index) => (
          <Step key={index} className="!font-semibold">
            <StepLabel>
              <Typography className="!text-lg !font-semibold  text-[#0C2E5C]">
                {zhLang ? step.label.zh : step.label.en}
              </Typography>
            </StepLabel>
            <StepContent>
              <ul className="list-disc pl-4 text-[#0C2E5C]">
                {(zhLang ? step.description.zh : step.description.en).map(
                  (item, index) => (
                    <li
                      className="mb-3 !leading-7 !text-[1.04rem] font-normal text-[#1E1D1D]"
                      key={index}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    className="!bg-[#0C2E5C] !text-white !text-[1rem] !capitalize"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, px: 2 }}
                  >
                    {index === stepsData.length - 1
                      ? t(
                          "landing:digitalMarketing.servicesStepByStep.services.finishButton"
                        )
                      : t(
                          "landing:digitalMarketing.servicesStepByStep.services.nextButton"
                        )}
                  </Button>
                  {index >= 1 && (
                    <Button
                      className="bg-white !text-[#0C2E5C] !font-semibold !text-[1rem] !capitalize"
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {t(
                        "landing:digitalMarketing.servicesStepByStep.services.backButton"
                      )}
                    </Button>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </BootstrapStepper>
      {activeStep === stepsData.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Button
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
            className="!text-lg !font-semibold !text-[#1E1D1D] !capitalize"
          >
            {t(
              "landing:digitalMarketing.servicesStepByStep.services.resetButton"
            )}
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default StepperComponent;
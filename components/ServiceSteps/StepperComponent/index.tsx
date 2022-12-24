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

const steps = [
  {
    label: "Initial Page Stepup",
    description: [
      "If the plan is started, we will make initial setup for pages",
      "Facebook Cover Design",
    ],
  },
  {
    label: "Photo",
    description: [
      "DSLR Camer photo will support",
      "Photo Retouch",
      "Design with Professional Designer per post",
    ],
  },
  {
    label: "Content",
    description: ["We are writing effective contents for your facebook page"],
  },
  {
    label: "Promotion Campaign Idea",
    description: [
      "We can support idea for customer as special promotion with creative.",
    ],
  },
  {
    label: "Video",
    description: [
      "Creative Video for customer services or products",
      "Can Professional Camera team",
      "Editing 3 minutes to 5 minutes",
      "Video with animation",
    ],
  },
  {
    label: "Message",
    description: [
      "Effective message response",
      "Reply can supoort within 9 am to 10 pm.",
    ],
  },
  {
    label: "Boost",
    description: [
      "Can choose Audience, Regional, Business Field for each post",
      "Effective boost for your products or services",
    ],
  },
  {
    label: "Payment method",
    description: ["Initial: 50%", "During services within 10 days : 50%"],
  },
];

const StepperComponent: FunctionComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //   class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root Mui-active css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root"
    const BootstrapStepper = styled(Stepper)({
        "& .Mui-active .MuiStepIcon-root": { color: "#0C2E5C" },
        "& .Mui-completed .MuiStepIcon-root": { color: "#0C2E5C" },
        "& .Mui-disabled .MuiStepIcon-root": { color: "#0C2E5C" }
    });

  return (
    <Box sx={{ maxWidth: 400 }} className="py-1">
      <BootstrapStepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} className="!font-semibold">
            <StepLabel

            //   optional={
            //     index === 7 ? (
            //       <Typography variant="caption">Last step</Typography>
            //     ) : null
            //   }
            >
              <Typography className="!text-lg !font-semibold  text-[#0C2E5C]">
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <ul className="list-disc pl-4 text-[#0C2E5C]">
                {step.description.map((item, index) => (
                  <li className="mb-3 !leading-7 !text-[1.04rem] font-normal text-[#1E1D1D]" key={index}>{item}</li>
                ))}
              </ul>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    className="bg-[#0C2E5C] text-white !text-[1rem] capitalize"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, px: 2 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next Step"}
                  </Button>
                  {index >= 1 &&(
                  <Button
                    // disabled={index === 0}
                    className="bg-white !text-[#0C2E5C]  !font-semibold !text-[1rem] capitalize"
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </BootstrapStepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} className="!text-lg !font-semibold text-[#1E1D1D] capitalize">
            Reset all
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default StepperComponent;
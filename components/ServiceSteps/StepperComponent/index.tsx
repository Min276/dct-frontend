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
    description: ["We are writing effective content"],
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
  //   const BootstrapStepper = styled(Stepper)({
  //       "&  .MuiStepIcon-root.active": { color: "#0C2E5C" },
  //       "& .MuiStepIcon-root-completed": { background: "#0C2E5C" },
  //       "& .Mui-disabled .MuiStepIcon-root": { background: "#0C2E5C" }
  //   });

  return (
    <Box sx={{ maxWidth: 400 }} className="py-1">
      <Stepper activeStep={activeStep} orientation="vertical">
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
              <ul className="list-disc pl-4 pb-8 text-[#0C2E5C] !leading-10">
                {step.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    className="bg-[#0C2E5C] text-white !font-semibold !text-lg capitalize"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next Step"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    className="bg-white !text-[#0C2E5C]  !font-semibold !text-lg capitalize"
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous Step
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset all
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default StepperComponent;
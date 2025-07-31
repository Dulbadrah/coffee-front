"use client"
import { useState } from "react";
import LeftPanelSign from "./LeftPanelSign";
import {SignUpForm} from "./SignUpPanel";
import SignUpEmailPassword from "./components/SignUpEmailPassword";

const Sign = () => {
    const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = [SignUpForm, SignUpEmailPassword][currentStep];
  return (
    <div className="flex min-h-screen">
      <LeftPanelSign />
      <StepComponent setCurrentStep={setCurrentStep} />
    </div>
  );
};
 
export default Sign;
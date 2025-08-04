"use client"
import { useState } from "react";
import LeftPanelSign from "./LeftPanelSign";
import { SignUpForm } from "./SignUpPanel";
import SignUpEmailPassword from "./components/SignUpEmailPassword";

const Sign = () => {
  const [username, setUsername] = useState('')
  const [currentStep, setCurrentStep] = useState(0);

  const onChangeUsername = (name: string) => {
    setUsername(name)
  }

  const StepComponent = [SignUpForm, SignUpEmailPassword][currentStep];
  return (
    <div className="flex min-h-screen">
      <LeftPanelSign />
      <StepComponent userName={username} onChangeUsername={onChangeUsername} setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default Sign;


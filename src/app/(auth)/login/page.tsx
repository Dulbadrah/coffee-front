import React from "react";
import LeftPanel from "./LeftPanel";
import LoginForm from "./loginPanel";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <LeftPanel />
      <LoginForm />
    </div>
  );
};
 
export default Login;
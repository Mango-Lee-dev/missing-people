import { useState } from "react";
import { AuthForm } from "../components/auth-form";

export const Login = () => {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  return (
    <div className="flex items-center justify-center w-full h-full">
      <AuthForm
        isRegister={authMode === "register"}
        isLoggedIn={authMode === "login"}
        setAuthMode={setAuthMode}
      />
    </div>
  );
};

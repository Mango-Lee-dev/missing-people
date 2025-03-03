import { Dispatch, SetStateAction } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

interface AuthFormProps {
  isRegister: boolean;
  isLoggedIn: boolean;
  setAuthMode: Dispatch<SetStateAction<"login" | "register">>;
}

export const AuthForm = ({
  isRegister,
  isLoggedIn,
  setAuthMode,
}: AuthFormProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {isRegister && <RegisterForm setAuthMode={setAuthMode} />}
      {isLoggedIn && <LoginForm setAuthMode={setAuthMode} />}
    </div>
  );
};

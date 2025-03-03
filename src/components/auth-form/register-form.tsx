import { Dispatch, SetStateAction } from "react";

export const RegisterForm = ({
  setAuthMode,
}: {
  setAuthMode: Dispatch<SetStateAction<"login" | "register">>;
}) => {
  return (
    <div>
      <button onClick={() => setAuthMode("login")}>로그인</button>
    </div>
  );
};

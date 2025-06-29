import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { signInWithAdmin } from "../../services/auth";

export const LoginForm = ({
  setAuthMode,
}: {
  setAuthMode: Dispatch<SetStateAction<"login" | "register">>;
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signInWithAdmin(formData.email, formData.password);
      console.log(response);
    } catch (error) {
      console.error("Error signing in with admin:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            로그인
          </button>
          <div className="flex justify-between w-full items-center h-full">
            <span>아직 회원이 아니세요?</span>
            <span
              className="text-primary-600 cursor-pointer"
              onClick={() => setAuthMode("register")}
            >
              회원가입
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

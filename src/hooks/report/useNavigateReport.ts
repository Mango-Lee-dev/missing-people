import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormData } from "../../types/form";
export const useNavigateReport = ({
  formData,
  currentStep,
  setCurrentStep,
}: {
  formData: FormData;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}) => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // 여기에 API 제출 로직이 들어갑니다
      console.log("제출된 데이터:", formData);
      // 성공 페이지로 리다이렉트
      navigate("/report-submitted");
    },
    [formData, navigate]
  );

  const nextStep = useCallback(() => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  }, [currentStep, setCurrentStep]);

  const prevStep = useCallback(() => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  }, [currentStep, setCurrentStep]);

  return { handleSubmit, nextStep, prevStep };
};

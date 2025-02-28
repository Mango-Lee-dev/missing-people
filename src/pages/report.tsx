import { StepOne } from "../components/report/step1";
import { StepTwo } from "../components/report/step2";
import { StepThree } from "../components/report/step3";
import { StepFour } from "../components/report/step4";
import { StepFive } from "../components/report/step5";
import { useFormData } from "../hooks/report/useFormData";
import { useNavigateReport } from "../hooks/report/useNavigateReport";
import { useChangeForm } from "../hooks/report/useChangeForm";
import { ProgressBar } from "../components/report/progressBar";
import { Title } from "../components/report/common/title";
import { StepForward } from "../components/report/common/step-forward";
import { StepBackward } from "../components/report/common/step-backward";

export const Report = () => {
  const { formData, setFormData, currentStep, setCurrentStep } = useFormData();
  const { handleSubmit, nextStep, prevStep } = useNavigateReport({
    formData,
    currentStep,
    setCurrentStep,
  });

  const { handleChange, handleImageUpload, validateStep, removeImage } =
    useChangeForm({
      formData,
      setFormData,
    });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Title title="실종자 신고하기" />

      {/* 진행 상태 표시 */}
      <ProgressBar currentStep={currentStep} />

      <div className="bg-white shadow-card rounded-lg p-6 mb-8">
        <form onSubmit={handleSubmit}>
          {/* 단계 1: 실종자 기본 정보 */}
          {currentStep === 1 && (
            <StepOne formData={formData} handleChange={handleChange} />
          )}

          {/* 단계 2: 실종 상황 정보 */}
          {currentStep === 2 && (
            <StepTwo formData={formData} handleChange={handleChange} />
          )}

          {/* 단계 3: 외형 특징 */}
          {currentStep === 3 && (
            <StepThree
              formData={formData}
              handleChange={handleChange}
              handleImageUpload={handleImageUpload}
              removeImage={removeImage}
            />
          )}

          {/* 단계 4: 건강 상태 */}
          {currentStep === 4 && (
            <StepFour formData={formData} handleChange={handleChange} />
          )}

          {/* 단계 5: 연락처 */}
          {currentStep === 5 && <StepFive />}
        </form>
      </div>
      <div
        className={`flex ${
          currentStep === 1 ? "justify-end" : "justify-between"
        }`}
      >
        {currentStep !== 1 && <StepBackward prevStep={prevStep} />}
        {currentStep !== 5 && <StepForward nextStep={nextStep} />}
      </div>
    </div>
  );
};

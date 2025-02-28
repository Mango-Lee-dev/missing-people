export const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="text-center">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                currentStep === step
                  ? "bg-primary-600 text-white"
                  : currentStep > step
                  ? "bg-primary-300 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
            <div className="text-xs mt-1">
              {step === 1 && "기본 정보"}
              {step === 2 && "실종 상황"}
              {step === 3 && "외형 특징"}
              {step === 4 && "건강 상태"}
              {step === 5 && "연락처"}
            </div>
          </div>
        ))}
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(currentStep / 5) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};
